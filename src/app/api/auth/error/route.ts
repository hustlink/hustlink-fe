// app/api/auth/error/route.ts
import { NextResponse } from 'next/server';

type ErrInfo = {
	code: string;
	message: string;
	hint?: string;
};

const ERROR_MAP: Record<string, ErrInfo> = {
	CredentialsSignin: {
		code: 'CREDENTIALS_SIGNIN',
		message: 'Invalid email or password.',
		hint: 'Periksa e-mail dan kata sandi Anda lalu coba lagi.',
	},
	AccessDenied: {
		code: 'ACCESS_DENIED',
		message: 'You do not have permission to access this resource.',
		hint: 'Pastikan akun Anda memiliki role yang sesuai.',
	},
	OAuthAccountNotLinked: {
		code: 'OAUTH_ACCOUNT_NOT_LINKED',
		message: 'This email is already used with different sign-in method.',
		hint: 'Coba masuk menggunakan metode yang sama seperti sebelumnya.',
	},
	Configuration: {
		code: 'CONFIGURATION_ERROR',
		message: 'Authentication is not configured correctly.',
		hint: 'Cek NEXTAUTH_SECRET, provider config, dan URL.',
	},
	CallbackRouteError: {
		code: 'CALLBACK_ERROR',
		message: 'Unexpected error in authentication callback.',
		hint: 'Cek log server untuk detail error.',
	},
	NetworkError: {
		code: 'NETWORK_ERROR',
		message: 'Cannot reach authentication server.',
		hint: 'Periksa NEXT_PUBLIC_API_URL / CORS / koneksi backend.',
	},
	InvalidBackendResponse: {
		code: 'INVALID_BACKEND_RESPONSE',
		message: 'Backend returned invalid JSON response.',
		hint: 'Pastikan endpoint /auth/login mengembalikan JSON valid.',
	},
	Callback: {
		code: 'CALLBACK_ERROR',
		message: 'Unexpected error in authentication callback.',
		hint: 'Cek log server untuk detail error.',
	},
	OAuthCallback: {
		code: 'OAUTH_CALLBACK_ERROR',
		message: 'OAuth callback failed.',
		hint: 'Periksa konfigurasi OAuth/redirect URI.',
	},
	Default: {
		code: 'AUTH_ERROR',
		message: 'Authentication error.',
		hint: 'Periksa konfigurasi NextAuth & env.',
	},
	Unknown: {
		code: 'UNKNOWN_ERROR',
		message: 'An unknown authentication error occurred.',
		hint: 'Silakan coba lagi atau hubungi admin.',
	},
};

export async function GET(req: Request) {
	const url = new URL(req.url);
	const params = url.searchParams;

	// 1) Ambil dari query
	let errKey = params.get('error') || '';

	// 2) Fallback: coba ambil dari Referer jika query kosong
	if (!errKey) {
		const referer = req.headers.get('referer');
		if (referer) {
			try {
				const r = new URL(referer);
				errKey = r.searchParams.get('error') || '';
			} catch {
				// ignore parsing error
			}
		}
	}

	// 3) Jika tetap kosong → redirect ke halaman UI agar UX konsisten
	if (!errKey) {
		return NextResponse.redirect(
			new URL('/auth/error?error=Unknown', url.origin),
		);
	}

	const redirect = params.get('redirect') || '/login';
	const info =
		ERROR_MAP[errKey] ??
		({
			code: 'UNKNOWN_ERROR',
			message: 'An unknown authentication error occurred.',
			hint: 'Silakan coba lagi atau hubungi admin.',
		} as ErrInfo);

	return NextResponse.json(
		{
			success: false,
			error: errKey,
			...info,
			redirect,
			timestamp: new Date().toISOString(),
		},
		{ status: 400 },
	);
}
