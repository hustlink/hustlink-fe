// utils/errorHandler.ts
export class ApiError extends Error {
	constructor(
		message: string,
		public statusCode: number,
		public code?: string,
	) {
		super(message);
		this.name = 'ApiError';
	}
}

export const handleApiError = (error: any): string => {
	if (error instanceof ApiError) {
		switch (error.statusCode) {
			case 401:
				return 'Invalid credentials';
			case 403:
				return 'Access denied';
			case 404:
				return 'User not found';
			case 422:
				return 'Invalid input data';
			case 500:
				return 'Server error. Please try again later';
			default:
				return error.message;
		}
	}

	if (error instanceof Error) {
		return error.message;
	}

	return 'An unexpected error occurred';
};
