// hooks/useAuth.ts
'use client';

import { signOut, useSession } from 'next-auth/react';
import { apiClient } from '@/lib/apiClient';

export function useAuth() {
	const { data: session, status, update } = useSession();

	const logout = async () => {
		try {
			if (session?.backendToken) {
				await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
					method: 'POST',
					headers: {
						Authorization: `Bearer ${session.backendToken}`,
					},
				});
			}
		} catch (error) {
			console.error('Backend logout error:', error);
		} finally {
			await signOut({ callbackUrl: '/login' });
		}
	};

	const refreshProfile = async () => {
		try {
			await update();
			return await apiClient.getCurrentUser();
		} catch (error) {
			console.error('Profile refresh error:', error);
			throw error;
		}
	};

	return {
		user: session?.user || null,
		isAuthenticated: status === 'authenticated',
		isLoading: status === 'loading',
		backendToken: session?.backendToken,
		userType: session?.user?.userType || null,
		isCompleted: session?.user?.isCompleted || false,
		isClient: session?.user?.userType === 'client',
		isFreelancer: session?.user?.userType === 'freelancer',
		logout,
		refreshProfile,
		session,
		sessionStatus: status,
		updateSession: update,
	};
}
