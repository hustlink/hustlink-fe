// components/UserProfile.tsx
'use client';

import { useAuth } from '@/hooks/useAuth';
import { LogoutButton } from './ui/LogoutButton';

export function UserProfile() {
	const { user, isLoading, isAuthenticated } = useAuth();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!isAuthenticated) {
		return null;
	}

	return (
		<div className='p-4 border rounded-lg'>
			<h2 className='text-xl font-bold mb-2'>{user?.name}</h2>
			<p className='text-gray-600'>{user?.email}</p>
			<p className='text-sm'>Type: {user?.userType}</p>
			<p className='text-sm'>
				Status: {user?.isCompleted ? '✅ Complete' : '⚠️ Incomplete'}
			</p>
			<LogoutButton />
		</div>
	);
}
