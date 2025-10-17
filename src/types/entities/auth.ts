// types/entities/auth.ts
import { User } from './user';

export interface LoginRequest {
	email: string;
	password: string;
}

export interface LoginResponse {
	success: boolean;
	token: string;
	user: User;
	message?: string;
}
