// hooks/useAuthGuard.ts
'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { getRedirectRoute, ROUTE_ACCESS } from '@/utils/constants';

interface UseAuthGuardOptions {
	requireAuth?: boolean;
	allowedUserTypes?: ('client' | 'freelancer')[];
	requireCompleted?: boolean;
	redirectTo?: string;
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

export const useAuthGuard = (options: UseAuthGuardOptions = {}) => {
	const {
		requireAuth = true,
		allowedUserTypes,
		requireCompleted = false,
		redirectTo,
	} = options;

	const { data: session, status } = useSession();
	const router = useRouter();
	const [isChecking, setIsChecking] = useState(true);

	useEffect(() => {
		if (status === 'loading') return;

		const isAuthenticated = status === 'authenticated' && !!session;
		const currentPath = window.location.pathname;

		console.log('Auth Guard Check:', {
			requireAuth,
			isAuthenticated,
			userType: session?.user?.userType,
			isCompleted: session?.user?.isCompleted,
			currentPath,
		});

		// Redirect unauthenticated users dari protected routes
		if (requireAuth && !isAuthenticated) {
			console.log('Redirecting to login: requires auth but not authenticated');
			const loginUrl = `/login?redirect=${encodeURIComponent(currentPath)}`;
			router.push(redirectTo || loginUrl);
			return;
		}

		// Redirect authenticated users dari public-only routes
		if (!requireAuth && isAuthenticated) {
			console.log('Redirecting authenticated user from public route');
			const userType = session.user.userType;
			const isCompleted = session.user.isCompleted;
			const defaultRedirect = getRedirectRoute(userType, isCompleted);
			router.push(redirectTo || defaultRedirect);
			return;
		}

		if (isAuthenticated && session.user) {
			const { userType, isCompleted } = session.user;

			// Check user type authorization
			if (allowedUserTypes && !allowedUserTypes.includes(userType)) {
				console.log('User type not allowed:', userType);
				const defaultRedirect = getRedirectRoute(userType, isCompleted);
				router.push(redirectTo || defaultRedirect);
				return;
			}

			// Check completion requirement
			if (requireCompleted && !isCompleted) {
				console.log('Profile completion required');
				const incompleteRoute = getRedirectRoute(userType, false);
				router.push(redirectTo || incompleteRoute);
				return;
			}

			// Route-specific access control
			const canAccess = canUserAccessRoute(currentPath, userType);
			if (!canAccess && !ROUTE_ACCESS.PUBLIC.includes(currentPath as any)) {
				console.log('Route access denied:', currentPath);
				const defaultRedirect = getRedirectRoute(userType, isCompleted);
				router.push(redirectTo || defaultRedirect);
				return;
			}
		}

		setIsChecking(false);
	}, [
		session,
		status,
		requireAuth,
		allowedUserTypes,
		requireCompleted,
		redirectTo,
		router,
	]);

	return {
		isLoading: status === 'loading' || isChecking,
		isAuthenticated: status === 'authenticated' && !!session,
		user: session?.user || null,
		userType: session?.user?.userType || null,
		isCompleted: session?.user?.isCompleted || false,
	};
};
