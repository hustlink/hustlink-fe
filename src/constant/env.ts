export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal
	? true
	: process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true';

export const env = {
	NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || '',
	NODE_ENV: process.env.NODE_ENV,
	SHOW_LOGGER: showLogger,
};
