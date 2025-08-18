// lib/apiClient.ts - Enhanced for Backend Integration
import { getSession, signOut } from 'next-auth/react';
import { env } from '../constant/env';

interface BackendErrorResponse {
	success: false;
	message: string;
	errors?: string[];
	statusCode?: number;
}

interface BackendSuccessResponse<T = any> {
	success: true;
	message: string;
	data?: T;
	user?: any;
}

type BackendResponse<T = any> =
	| BackendSuccessResponse<T>
	| BackendErrorResponse;

export class ApiClient {
	private baseURL: string;

	constructor() {
		this.baseURL = env.NEXT_PUBLIC_API_URL || '';
	}

	private async request<T>(
		endpoint: string,
		options: RequestInit = {},
	): Promise<T> {
		// Get NextAuth session untuk backend token
		const session = await getSession();

		const config: RequestInit = {
			headers: {
				'Content-Type': 'application/json',
				// Use backend JWT token dari NextAuth session
				...(session?.backendToken && {
					Authorization: `Bearer ${session.backendToken}`,
				}),
				...options.headers,
			},
			...options,
		};

		try {
			const response = await fetch(`${this.baseURL}${endpoint}`, config);
			const data: BackendResponse<T> = await response.json();

			// Handle backend error responses
			if (!response.ok) {
				if (response.status === 401) {
					console.warn('Backend token invalid/expired, signing out');
					await this.handleTokenExpiration();
					throw new Error('Session expired, please login again');
				}

				if (response.status === 403) {
					throw new Error('Access denied. Insufficient permissions.');
				}

				if (response.status === 404) {
					throw new Error('Resource not found.');
				}

				if (response.status === 409) {
					throw new Error(
						data.message || 'Conflict - resource already exists.',
					);
				}

				// Handle validation errors (400)
				if (response.status === 400 && 'errors' in data && data.errors) {
					throw new Error(`Validation failed: ${data.errors.join(', ')}`);
				}

				throw new Error(
					data.message || `HTTP error! status: ${response.status}`,
				);
			}

			// Handle backend success response format
			if ('success' in data && data.success) {
				return (data.data || data.user || data) as T;
			}

			throw new Error(data.message || 'Unknown error occurred');
		} catch (error) {
			if (error instanceof Error) {
				throw error;
			}
			throw new Error('Network error occurred');
		}
	}

	private async handleTokenExpiration() {
		if (typeof window !== 'undefined') {
			const currentPath = window.location.pathname;
			await signOut({
				callbackUrl: `/login?redirect=${encodeURIComponent(currentPath)}`,
			});
		}
	}

	// Standard HTTP methods
	async get<T>(endpoint: string): Promise<T> {
		return this.request<T>(endpoint, { method: 'GET' });
	}

	async post<T>(endpoint: string, data?: any): Promise<T> {
		return this.request<T>(endpoint, {
			method: 'POST',
			body: data ? JSON.stringify(data) : undefined,
		});
	}

	async put<T>(endpoint: string, data?: any): Promise<T> {
		return this.request<T>(endpoint, {
			method: 'PUT',
			body: data ? JSON.stringify(data) : undefined,
		});
	}

	async delete<T>(endpoint: string): Promise<T> {
		return this.request<T>(endpoint, { method: 'DELETE' });
	}

	async patch<T>(endpoint: string, data?: any): Promise<T> {
		return this.request<T>(endpoint, {
			method: 'PATCH',
			body: data ? JSON.stringify(data) : undefined,
		});
	}

	// Helper methods untuk auth-related operations
	async getCurrentUser() {
		try {
			const session = await getSession();
			if (!session?.backendToken) {
				return null;
			}

			return await this.get('/auth/profile');
		} catch (error) {
			console.error('Failed to get current user:', error);
			return null;
		}
	}

	async refreshUserProfile() {
		try {
			const profile = await this.get('/auth/profile');

			// Trigger NextAuth session update
			const event = new Event('visibilitychange');
			document.dispatchEvent(event);

			return profile;
		} catch (error) {
			console.error('Failed to refresh user profile:', error);
			throw error;
		}
	}

	async changePassword(
		oldPassword: string,
		newPassword: string,
		confirmPassword: string,
	) {
		return this.post('/auth/change-password', {
			oldPassword,
			newPassword,
			confirmPassword,
		});
	}

	async isAuthenticated(): Promise<boolean> {
		const session = await getSession();
		return !!session?.backendToken;
	}

	// Role-based access helpers
	async canAccessClientFeatures(): Promise<boolean> {
		const session = await getSession();
		return session?.user?.userType === 'client';
	}

	async canAccessFreelancerFeatures(): Promise<boolean> {
		const session = await getSession();
		return session?.user?.userType === 'freelancer';
	}

	async canAccessAdminFeatures(): Promise<boolean> {
		try {
			await this.get('/auth/admin-only');
			return true;
		} catch {
			return false;
		}
	}
}

// Server-side API client untuk API routes
export class ServerApiClient {
	private baseURL: string;

	constructor() {
		this.baseURL = env.NEXT_PUBLIC_API_URL || '';
	}

	async request<T>(
		endpoint: string,
		options: RequestInit = {},
		token?: string,
	): Promise<T> {
		const config: RequestInit = {
			headers: {
				'Content-Type': 'application/json',
				...(token && { Authorization: `Bearer ${token}` }),
				...options.headers,
			},
			...options,
		};

		try {
			const response = await fetch(`${this.baseURL}${endpoint}`, config);
			const data: BackendResponse<T> = await response.json();

			if (!response.ok) {
				throw new Error(
					data.message || `HTTP error! status: ${response.status}`,
				);
			}

			if ('success' in data && data.success) {
				return (data.data || data.user || data) as T;
			}

			throw new Error(data.message || 'Unknown error occurred');
		} catch (error) {
			if (error instanceof Error) {
				throw error;
			}
			throw new Error('Network error occurred');
		}
	}

	async get<T>(endpoint: string, token?: string): Promise<T> {
		return this.request<T>(endpoint, { method: 'GET' }, token);
	}

	async post<T>(endpoint: string, data?: any, token?: string): Promise<T> {
		return this.request<T>(
			endpoint,
			{
				method: 'POST',
				body: data ? JSON.stringify(data) : undefined,
			},
			token,
		);
	}

	async put<T>(endpoint: string, data?: any, token?: string): Promise<T> {
		return this.request<T>(
			endpoint,
			{
				method: 'PUT',
				body: data ? JSON.stringify(data) : undefined,
			},
			token,
		);
	}

	async delete<T>(endpoint: string, token?: string): Promise<T> {
		return this.request<T>(endpoint, { method: 'DELETE' }, token);
	}
}

export const apiClient = new ApiClient();
export const serverApiClient = new ServerApiClient();
