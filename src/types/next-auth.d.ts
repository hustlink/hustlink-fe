// types/next-auth.d.ts
import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
	interface User {
		id: string;
		email: string;
		name: string;
		userType: 'client' | 'freelancer';
		isCompleted: boolean;
		provider: string;
		backendToken?: string;
	}

	interface Session {
		user: {
			id: string;
			email: string;
			name: string;
			userType: 'client' | 'freelancer';
			isCompleted: boolean;
			provider: string;
		};
		backendToken?: string;
		tokenExpiry?: number;
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		userType?: 'client' | 'freelancer';
		isCompleted?: boolean;
		provider?: string;
		backendToken?: string;
		tokenExpiry?: number;
	}
}
