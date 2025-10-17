import { z } from 'zod';

export const loginSchema = z.object({
	email: z
		.string()
		.min(1, 'Email is required')
		.email('Please enter a valid email address'),
	password: z
		.string()
		.min(1, 'Password is required')
		.min(8, 'Password must be at least 8 characters'),
});

export const signupSchema = z
	.object({
		name: z
			.string()
			.min(1, 'Name is required')
			.min(2, 'Name must be at least 2 characters'),
		email: z
			.string()
			.min(1, 'Email is required')
			.email('Please enter a valid email address'),
		password: z
			.string()
			.min(1, 'Password is required')
			.min(8, 'Password must be at least 8 characters')
			.regex(
				/(?=.*[a-z])/,
				'Password must contain at least one lowercase letter',
			)
			.regex(
				/(?=.*[A-Z])/,
				'Password must contain at least one uppercase letter',
			)
			.regex(/(?=.*\d)/, 'Password must contain at least one number'),
		confirmPassword: z.string().min(1, 'Please confirm your password'),
		userType: z.enum(['client', 'freelancer'], {
			required_error: 'Please select user type',
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});

export const forgotPasswordSchema = z.object({
	email: z
		.string()
		.min(1, 'Email is required')
		.email('Please enter a valid email address'),
});

export const resetPasswordSchema = z
	.object({
		password: z
			.string()
			.min(1, 'Password is required')
			.min(8, 'Password must be at least 8 characters'),
		confirmPassword: z.string().min(1, 'Please confirm your password'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
