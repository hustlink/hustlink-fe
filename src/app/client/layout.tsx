// app/client/layout.tsx - ADD PROTECTION

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { ReactNode } from 'react';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function ClientLayout({
	children,
}: {
	children: ReactNode;
}) {
	// ⚠️ DEV BYPASS: comment-kan guard saat DEV

	const session = await getServerSession(authOptions);

	// Redirect if not authenticated
	if (!session) {
		redirect('/login');
	}

	// Redirect if not client
	if (session.user.userType !== 'client') {
		redirect('/freelancer');
	}

	// Your existing layout structure (keep it as is)
	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Client-specific header/navbar bisa ditambahkan di sini */}
			{children}
		</div>
	);
}
