export interface ApiResponse<T = any> {
	success: boolean;
	message: string;
	data?: T;
	errors?: string[];
	timestamp?: string;
	path?: string;
}

export interface ApiError {
	message: string;
	statusCode: number;
	error?: string;
	timestamp?: string;
	path?: string;
}

export interface PaginatedResponse<T> {
	data: T[];
	total: number;
	page: number;
	limit: number;
	totalPages: number;
}
