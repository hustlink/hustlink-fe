// app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { AUTH_ROUTES, getRedirectRoute, ROUTE_ACCESS } from '@/utils/constants';

interface BackendLoginResponse {
	success: boolean;
	message: string;
	user: {
		id: string;
		email: string;
		name: string;
		userType: 'client' | 'freelancer';
		isCompleted: boolean;
		provider: string;
	};
	token: string;
}

interface BackendProfileResponse {
	success: boolean;
	message: string;
	user: {
		id: string;
		email: string;
		name: string;
		userType: 'client' | 'freelancer';
		isCompleted: boolean;
	};
}

function canUserAccessRoute(
	route: string,
	userType: 'client' | 'freelancer',
): boolean {
	if (
		ROUTE_ACCESS.SHARED.some((sharedRoute) => route.startsWith(sharedRoute))
	) {
		return true;
	}

	if (userType === 'client') {
		return ROUTE_ACCESS.CLIENT_ONLY.some((clientRoute) =>
			route.startsWith(clientRoute.replace(/\[.*?\]/g, '')),
		);
	}

	if (userType === 'freelancer') {
		return ROUTE_ACCESS.FREELANCER_ONLY.some((freelancerRoute) =>
			route.startsWith(freelancerRoute.replace(/\[.*?\]/g, '')),
		);
	}

	return false;
}

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			id: 'credentials',
			name: 'credentials',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
				rememberMe: { label: 'Remember Me', type: 'checkbox' },
			},
			async authorize(credentials) {
				// 1) Validasi input kosong → bukan error sistem → return null
				if (!credentials?.email || !credentials?.password) {
					console.warn('[authorize] Missing email/password');
					return null;
				}

				// 2) Panggil backend login — bedakan network/JSON error (throw) vs invalid credentials (null)
				let resp: Response;
				try {
					resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							email: credentials.email,
							password: credentials.password,
							rememberMe: credentials.rememberMe === 'true',
						}),
					});
				} catch (e) {
					// Network/CORS/DNS error → error sistem → arahkan ke /auth/error
					console.error('[authorize] Network error to /auth/login:', e);
					throw new Error('NetworkError');
				}

				// 3) Parse JSON dengan guard
				let data: BackendLoginResponse | undefined;
				try {
					data = (await resp.json()) as BackendLoginResponse;
				} catch (e) {
					console.error(
						'[authorize] Invalid JSON from backend /auth/login:',
						e,
					);
					throw new Error('InvalidBackendResponse');
				}

				// 4) Kredensial salah / ditolak backend → return null (tanpa lempar error)
				//    Bisa resp.status 400/401, atau resp.ok tapi success:false — dua2nya dianggap invalid credentials
				if (!resp.ok || !data?.success) {
					const backendMsg = data?.message ? ` (${data.message})` : '';
					console.warn(
						`[authorize] Invalid credentials or rejected by backend${backendMsg}`,
					);
					return null;
				}

				// 5) Sukses → kembalikan user object untuk JWT
				return {
					id: data.user.id,
					email: data.user.email,
					name: data.user.name,
					userType: data.user.userType,
					isCompleted: data.user.isCompleted,
					provider: data.user.provider,
					backendToken: data.token,
				};
			},
		}),
	],

	callbacks: {
		async jwt({ token, user }) {
			// Saat login pertama, 'user' akan terisi dari authorize()
			if (user) {
				token.userType = (user as any).userType;
				token.isCompleted = (user as any).isCompleted;
				token.provider = (user as any).provider;
				token.backendToken = (user as any).backendToken;
				token.tokenExpiry = Date.now() + 15 * 60 * 1000; // 15 menit
			}

			// Token refresh logic (opsional)
			if (
				token.backendToken &&
				token.tokenExpiry &&
				Date.now() > (token.tokenExpiry as number) - 60_000
			) {
				try {
					const response = await fetch(
						`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
						{
							method: 'POST',
							headers: {
								Authorization: `Bearer ${token.backendToken as string}`,
							},
						},
					);

					if (response.ok) {
						const refreshData = await response.json();
						if (refreshData?.success && refreshData?.token) {
							token.backendToken = refreshData.token;
							token.tokenExpiry = Date.now() + 15 * 60 * 1000;
						}
					} else {
						// refresh gagal → kosongkan token agar dianggap logout di protected routes
						return {};
					}
				} catch (error) {
					console.error('Token refresh error:', error);
					return {};
				}
			}

			return token;
		},

		async session({ session, token }) {
			// Guard ringan agar tidak throw jika shape berubah
			session.user = session.user ?? {};

			session.user.id = (token.sub as string) || '';
			session.user.userType =
				(token.userType as 'client' | 'freelancer') ?? undefined;
			session.user.isCompleted = Boolean(token.isCompleted);
			session.user.provider = (token.provider as string) ?? undefined;

			session.backendToken = (token.backendToken as string) ?? '';
			session.tokenExpiry = (token.tokenExpiry as number) ?? 0;

			return session;
		},

		// Simplified redirect without token parameter
		async redirect({ url, baseUrl }) {
			// Allow callback URLs on same origin
			if (url.startsWith('/')) return `${baseUrl}${url}`;
			if (new URL(url).origin === baseUrl) return url;
			// Default to base URL for external redirects
			return baseUrl;
		},
	},

	pages: {
		signIn: AUTH_ROUTES.LOGIN,
		error: '/error',
	},

	session: {
		strategy: 'jwt',
		maxAge: 7 * 24 * 60 * 60, // 7 hari
		updateAge: 15 * 60, // 15 menit
	},

	secret: process.env.NEXTAUTH_SECRET,
	debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
