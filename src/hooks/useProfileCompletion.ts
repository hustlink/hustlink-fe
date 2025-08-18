// hooks/useProfileCompletion.ts
'use client';

import { apiClient } from '@/lib/apiClient';
import { getRedirectRoute } from '@/utils/constants';
import { useAuth } from './useAuth';

export function useProfileCompletion() {
	const { user, userType } = useAuth();

	const completeProfile = async (profileData: any) => {
		try {
			await apiClient.put('/auth/profile', {
				...profileData,
				isCompleted: true,
			});

			await apiClient.refreshUserProfile();

			if (userType) {
				const completedRoute = getRedirectRoute(userType, true);
				window.location.href = completedRoute;
			}
		} catch (error) {
			console.error('Profile completion error:', error);
			throw error;
		}
	};

	const getCompletionProgress = () => {
		if (!user) return 0;

		const requiredFields = ['email', 'name'];
		const completedFields = requiredFields.filter(
			(field) => user[field as keyof typeof user],
		).length;

		return Math.round((completedFields / requiredFields.length) * 100);
	};

	return {
		isCompleted: user?.isCompleted || false,
		completionProgress: getCompletionProgress(),
		completeProfile,
	};
}
