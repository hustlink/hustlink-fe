// app/(auth)/login/components/LogInForm.tsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getSession, signIn } from 'next-auth/react';
import { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import { HiUser } from 'react-icons/hi';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { MdPassword } from 'react-icons/md';
import { Button } from '@/app/shared/components/ui/button';
import Input from '@/app/shared/components/ui/Input';
import Typography from '@/app/shared/components/ui/Typography';
import { getRedirectRoute } from '@/utils/constants';

export default function LogInForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [errorEmail, setErrorEmail] = useState('');
	const [errorPassword, setErrorPassword] = useState('');

	const router = useRouter();

	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const onSubmit = async () => {
		setError('');
		setErrorEmail('');
		setErrorPassword('');

		let hasError = false;

		if (!email.trim()) {
			setErrorEmail('Email is required.');
			hasError = true;
		} else if (!validateEmail(email)) {
			setErrorEmail('Please enter a valid email address.');
			hasError = true;
		}

		if (!password) {
			setErrorPassword('Password cannot be empty.');
			hasError = true;
		} else if (password.length < 8) {
			setErrorPassword('Password minimal 8 karakter.');
			hasError = true;
		}

		if (hasError) return;

		setIsLoading(true);

		try {
			// NextAuth signIn
			const result = await signIn('credentials', {
				email,
				password,
				rememberMe: rememberMe.toString(),
				redirect: false,
			});

			if (result?.error) {
				if (result.error === 'CredentialsSignin') {
					setError('Invalid email or password');
				} else {
					// setError(result.error)
					// Fallback UX untuk error sistem dari NextAuth ketika redirect:false
					// Arahkan ke halaman error UI agar konsisten
					router.push(`/auth/error?error=${encodeURIComponent(result.error)}`);
				}
				return;
			}

			// Get session for redirect
			const session = await getSession();

			if (session?.user) {
				const { userType, isCompleted } = session.user;

				// Check redirect param
				const urlParams = new URLSearchParams(window.location.search);
				const redirectUrl = urlParams.get('redirect');

				if (redirectUrl && redirectUrl.startsWith('/')) {
					router.push(redirectUrl);
					return;
				}

				// Default redirect
				const defaultRoute = getRedirectRoute(userType, isCompleted);
				router.push(defaultRoute);
			}
		} catch (err) {
			console.error('Login error:', err);
			setError('Login failed. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='flex flex-col w-52 sm:w-72 md:w-80 lg:w-96 max-w-7xl pt-2 sm:pt-6 md:pt-8 lg:pt-10 justify-start items-center'>
			<Typography
				variant='j0'
				as='h1'
				color='primary'
				className='text-center leading-[84px] mb-0 md:mb-3 lg:mb-5'
			>
				Log in
			</Typography>

			<div className='flex flex-col space-y-5 items-center'>
				<h2 className='font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-[#6B7280]'>
					Don't have account?&nbsp;
					<Link href='/signup' className='underline text-blue-600'>
						Sign up here
					</Link>
				</h2>

				<div className='flex flex-col w-full justify-center items-center space-y-2'>
					{/* Email Input */}
					<div className='flex flex-col w-full'>
						<Input
							variant='large'
							type='text'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Email'
							iconLeft={<HiUser />}
							className='font-semibold'
							disabled={isLoading}
						/>
						{errorEmail && (
							<p className='text-red-500 text-xs mt-1'>{errorEmail}</p>
						)}
					</div>

					{/* Password Input */}
					<div className='flex flex-col w-full'>
						<Input
							variant='large'
							type={showPassword ? 'text' : 'password'}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder='Password'
							iconLeft={<MdPassword />}
							iconRight={
								<button
									type='button'
									onClick={() => setShowPassword(!showPassword)}
									className='focus:outline-none'
									disabled={isLoading}
								>
									{showPassword ? <IoEye /> : <IoEyeOff />}
								</button>
							}
							className='font-semibold w-full'
							disabled={isLoading}
						/>
						{errorPassword && (
							<p className='text-red-500 text-xs mt-1'>{errorPassword}</p>
						)}
					</div>

					{/* Remember Me */}
					<div className='flex items-center justify-start w-full'>
						<input
							type='checkbox'
							id='rememberMe'
							checked={rememberMe}
							onChange={(e) => setRememberMe(e.target.checked)}
							className='mr-2'
							disabled={isLoading}
						/>
						<label htmlFor='rememberMe' className='text-sm text-gray-600'>
							Remember me for 7 days
						</label>
					</div>

					{/* Submit Button */}
					<div className='flex flex-col w-full'>
						<Button
							variant='default'
							className='w-full h-10 md:h-12 text-base lg:text-lg rounded-[15px] bg-[#296CF2] hover:bg-[#1F57C5] font-bold tracking-[0.08em] disabled:opacity-50'
							onClick={onSubmit}
							disabled={isLoading}
						>
							{isLoading ? 'Logging in...' : 'Continue'}
						</Button>
						{error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
					</div>

					{/* Forgot Password */}
					<div className='w-full text-end'>
						<Link
							href='/forgot-password'
							className='text-sm text-blue-600 hover:underline'
						>
							Forgot your password?
						</Link>
					</div>

					{/* OR separator */}
					<div className='flex space-x-1 w-full h-5 items-center'>
						<hr className='bg-[#6B7280] w-full h-0.5' />
						<p className='leading-5 text-xl text-[#6B7280] tracking-[0.08em] font-semibold'>
							or
						</p>
						<hr className='bg-[#6B7280] w-full h-0.5' />
					</div>

					{/* Phone Login Button */}
					<Button
						variant='outline'
						className='relative flex w-full h-10 gap-4 bg-white justify-center items-center font-bold text-black rounded-[15px] border-2 border-gray-500 hover:text-[#296CF2] disabled:opacity-50'
						onClick={() => router.push('/login/phone')}
						disabled={isLoading}
					>
						<span className='absolute left-4 flex items-center'>
							<FaPhone className='w-[20px] h-[20px] rotate-90' />
						</span>
						<span className='text-sm'>Continue with phone number</span>
					</Button>

					{/* Google Info */}
					<div className='text-center text-xs text-gray-500 mt-2'>
						<p>
							For Google sign-in, use the{' '}
							<Link href='/signup' className='text-blue-600 hover:underline'>
								Sign Up
							</Link>{' '}
							page with OTP verification.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export { LogInForm };
