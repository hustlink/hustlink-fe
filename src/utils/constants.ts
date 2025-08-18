// src/utils/constants.ts
export const AUTH_ROUTES = {
	LOGIN: '/login',
	SIGNUP: '/signup',
	FORGOT_PASSWORD: '/forgot-password',
	RESET_PASSWORD: '/reset-password',
} as const;

// Client-specific routes
export const CLIENT_ROUTES = {
	LANDING: '/client', // Landing page client (setelah login completed)
	PROFILE: '/client/profile', // Profile page client (onboarding/incomplete)
	SHOW_HUSTLERS: '/client/show-hustlers',
	HUSTLER_DETAIL: '/client/show-hustlers/[hustlerId]',
	HUSTLER_REVIEWS: '/client/show-hustlers/[hustlerId]/reviews',
	CHAT: '/client/chat',
} as const;

// Freelancer-specific routes
export const FREELANCER_ROUTES = {
	LANDING: '/freelancer', // Landing page freelancer (setelah login completed)
	PROFILE: '/freelancer/profile', // Profile page freelancer (onboarding/incomplete)
	ADD_BIO: '/freelancer/profile/addBioPage',
	ADD_PHOTO: '/freelancer/profile/addPhotoPage',
	ADD_WORK_FIELD: '/freelancer/profile/addWorkField',
	UPDATE_PROFILE: '/freelancer/profile/updateProfile',
	UPLOAD_CV: '/freelancer/profile/uploadCV',
} as const;

// Shared protected routes
export const SHARED_ROUTES = {
	TEST_PROFILE: '/test-profile',
	EDIT_PROFILE: '/editprofile',
} as const;

// Public routes
export const PUBLIC_ROUTES = {
	HOME: '/',
	TEMP_LANDING: '/tempLanding',
	PLAYGROUND: '/playground',
} as const;

export const API_ENDPOINTS = {
	LOGIN: '/auth/login',
	LOGOUT: '/auth/logout',
	VERIFY_TOKEN: '/auth/verify-token',
	SIGNUP: '/auth/signup',
	FORGOT_PASSWORD: '/auth/forgot-password',
	RESET_PASSWORD: '/auth/reset-password',
} as const;

export const STORAGE_KEYS = {
	AUTH_TOKEN: 'auth_token',
	USER_DATA: 'user_data',
	REDIRECT_URL: 'redirect_url',
} as const;

// FLATTENED - Default redirects dengan structure yang flat
export const DEFAULT_REDIRECTS = {
	client_completed: '/client', // Client completed → landing
	client_incomplete: '/client/show-hustlers', // Client incomplete → onboarding
	freelancer_completed: '/freelancer', // Freelancer completed → landing
	freelancer_incomplete: '/freelancer/profile', // Freelancer incomplete → onboarding
} as const;

// Helper type untuk type safety
export type RedirectKey = keyof typeof DEFAULT_REDIRECTS;

// Route access rules - Updated untuk structure baru
export const ROUTE_ACCESS = {
	CLIENT_ONLY: [
		CLIENT_ROUTES.LANDING, // /client - landing page setelah completed
		CLIENT_ROUTES.PROFILE, // /client/profile - onboarding page
		CLIENT_ROUTES.SHOW_HUSTLERS,
		CLIENT_ROUTES.CHAT,
	],
	FREELANCER_ONLY: [
		FREELANCER_ROUTES.LANDING, // /freelancer - landing page setelah completed
		FREELANCER_ROUTES.PROFILE, // /freelancer/profile - onboarding page
		FREELANCER_ROUTES.ADD_BIO,
		FREELANCER_ROUTES.ADD_PHOTO,
		FREELANCER_ROUTES.ADD_WORK_FIELD,
		FREELANCER_ROUTES.UPDATE_PROFILE,
		FREELANCER_ROUTES.UPLOAD_CV,
	],
	SHARED: [SHARED_ROUTES.TEST_PROFILE, SHARED_ROUTES.EDIT_PROFILE],
	PUBLIC: [
		PUBLIC_ROUTES.HOME,
		PUBLIC_ROUTES.TEMP_LANDING,
		PUBLIC_ROUTES.PLAYGROUND,
	],
} as const;

// Helper functions untuk get redirect routes
export const getRedirectRoute = (
	userType: 'client' | 'freelancer',
	isCompleted: boolean,
): string => {
	const key: RedirectKey = `${userType}_${isCompleted ? 'completed' : 'incomplete'}`;
	return DEFAULT_REDIRECTS[key];
};

// Helper untuk get completed route only
export const getCompletedRoute = (
	userType: 'client' | 'freelancer',
): string => {
	return DEFAULT_REDIRECTS[`${userType}_completed`];
};

// Helper untuk get incomplete route only
export const getIncompleteRoute = (
	userType: 'client' | 'freelancer',
): string => {
	return DEFAULT_REDIRECTS[`${userType}_incomplete`];
};
