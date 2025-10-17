// src/app/freelancer/layout.tsx

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import type { ReactNode } from 'react';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function FreelancerLayout({
	children,
}: {
	children: ReactNode;
}) {
	const session = await getServerSession(authOptions);

	// Redirect jika belum login
	if (!session) {
		redirect('/login');
	}

	// Redirect jika userType bukan freelancer
	if (session.user?.userType !== 'freelancer') {
		redirect('/client');
	}

	// Keep your existing layout structure
	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Freelancer-specific header/navbar bisa ditambahkan di sini */}
			{children}
		</div>
	);
}
