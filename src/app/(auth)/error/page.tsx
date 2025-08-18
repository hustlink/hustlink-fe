// app/(auth)/error/page.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

const MAP: Record<
	string,
	{ title: string; detail: string; action?: string; target?: string }
> = {
	CredentialsSignin: {
		title: 'Invalid email or password',
		detail: 'Periksa kembali kredensial Anda lalu coba lagi.',
		action: 'Kembali ke Login',
		target: '/login',
	},
	AccessDenied: {
		title: 'Access denied',
		detail: 'Anda tidak memiliki izin untuk mengakses halaman ini.',
		action: 'Ke Beranda',
		target: '/',
	},
	OAuthAccountNotLinked: {
		title: 'Account not linked',
		detail:
			'Email ini sudah terhubung dengan metode login yang berbeda. Gunakan metode yang sama seperti sebelumnya.',
		action: 'Kembali ke Login',
		target: '/login',
	},
	NetworkError: {
		title: 'Network error',
		detail: 'Server otentikasi tidak dapat dihubungi. Coba lagi beberapa saat.',
		action: 'Coba lagi',
		target: '/login',
	},
	InvalidBackendResponse: {
		title: 'Invalid backend response',
		detail: 'Response dari server tidak valid. Hubungi admin.',
		action: 'Ke Login',
		target: '/login',
	},
	CallbackRouteError: {
		title: 'Authentication callback error',
		detail: 'Terjadi kesalahan saat memproses login. Coba lagi.',
		action: 'Kembali ke Login',
		target: '/login',
	},
	Callback: {
		title: 'Authentication callback error',
		detail: 'Terjadi kesalahan saat memproses login. Coba lagi.',
		action: 'Kembali ke Login',
		target: '/login',
	},
	OAuthCallback: {
		title: 'OAuth callback error',
		detail: 'Login via OAuth mengalami kendala. Coba lagi.',
		action: 'Kembali ke Login',
		target: '/login',
	},
	Default: {
		title: 'Authentication error',
		detail: 'Terjadi kesalahan saat autentikasi.',
		action: 'Kembali ke Login',
		target: '/login',
	},
	Unknown: {
		title: 'Unknown error',
		detail: 'Tidak ada detail error yang diterima. Coba lagi.',
		action: 'Kembali ke Login',
		target: '/login',
	},
};

export default function AuthErrorPage() {
	const params = useSearchParams();
	const router = useRouter();
	const err = params.get('error') || 'Unknown';
	const meta = useMemo(() => MAP[err] ?? null, [err]);

	const handleAction = () => {
		if (meta?.target) router.push(meta.target);
		else router.push('/login');
	};

	return (
		<div className='min-h-screen flex items-center justify-center p-6'>
			<div className='max-w-md w-full bg-white border rounded-xl p-6 shadow-sm'>
				<h1 className='text-xl font-semibold mb-2'>
					{meta?.title ?? 'Authentication Error'}
				</h1>
				<p className='text-gray-600 mb-4'>
					{meta?.detail ?? 'Terjadi kesalahan saat otentikasi.'}
				</p>

				<div className='text-sm text-gray-500 mb-4'>
					<div>
						Error key: <span className='font-mono'>{err}</span>
					</div>
					<a
						className='underline text-blue-600'
						href={`/api/auth/error?error=${encodeURIComponent(err)}`}
						target='_blank'
						rel='noreferrer'
					>
						Lihat detail JSON
					</a>
				</div>

				<button
					onClick={handleAction}
					className='w-full h-10 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700'
				>
					{meta?.action ?? 'Kembali'}
				</button>
			</div>
		</div>
	);
}
