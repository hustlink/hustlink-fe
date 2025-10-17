// app/(auth)/layout.tsx

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getRedirectRoute } from '@/utils/constants';

export default async function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions);

	if (session) {
		const userType = session.user.userType;
		const isCompleted = session.user.isCompleted;
		const redirectUrl = getRedirectRoute(userType, isCompleted);
		redirect(redirectUrl);
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50'>
			{children}
		</div>
	);
}
