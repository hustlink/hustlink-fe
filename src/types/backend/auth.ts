//types/backend/auth.ts
export interface BackendLoginResponse {
	success: boolean;
	message: string;
	data: {
		success: boolean;
		message: string;
		user: {
			id: string;
			email: string;
			name: string;
			userType: 'client' | 'freelancer';
			provider: string;
			isCompleted: boolean;
		};
		token: string;
	};
	timestamp: string;
	path: string;
}
