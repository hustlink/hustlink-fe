// app/test-profile/page.tsx
'use client';

import { LoadingSpinner } from '@/app/shared/components/LoadingSpinner';
import { useAuthGuard } from '@/hooks/useAuthGuard';

export default function TestProfilePage() {
	const { isLoading, isAuthenticated, user } = useAuthGuard({
		requireAuth: true, // Both client and freelancer can access
	});

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (!isAuthenticated) {
		// Akan di-redirect oleh hook, jadi tidak perlu render apa pun di sini
		return null;
	}

	// Tambahan guard agar tidak crash jika field2 tertentu belum ada di session.user
	const u = (user ?? {}) as {
		name?: string;
		email?: string;
		userType?: 'client' | 'freelancer' | string;
		phone?: string;
		address?: string;
		bio?: string;
	};

	return (
		<div className='space-y-2'>
			<h1 className='text-xl font-semibold'>Profil Lengkap</h1>
			<p>Nama: {u.name ?? 'Belum diisi'}</p>
			<p>Email: {u.email ?? 'Belum diisi'}</p>
			<p>Tipe User: {u.userType ?? '-'}</p>
			<p>Telepon: {u.phone ?? 'Belum diisi'}</p>
			<p>Alamat: {u.address ?? 'Belum diisi'}</p>
			<p>Bio: {u.bio ?? 'Belum diisi'}</p>
		</div>
	);
}
