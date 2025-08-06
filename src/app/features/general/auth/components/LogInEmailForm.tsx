'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
import { HiUser } from 'react-icons/hi';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { MdPassword } from 'react-icons/md';
import { Button } from '@/app/shared/components/ui/button';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

type LogInEmailFormProps = {
	userEmail: string;
};

export default function LogInEmailForm({ userEmail }: LogInEmailFormProps) {
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = () => {
		setIsLoading(true);
		setError('');

		setTimeout(() => {
			if (!password) {
				setError('Password cannot be empty.');
				setIsLoading(false);
				return;
			}

			if (password.length < 8) {
				setError('Password minimal 8 karakter.');
				setIsLoading(false);
				return;
			}

			// Login sukses (dummy)
			console.log('Logging in:', userEmail, password);
			setIsLoading(false);
		}, 1000);
		//  login logic nanti disini
	};

	return (
		<div
			className={`flex flex-col py-14 items-center min-h-screen ${inter.className}`}
		>
			<h1 className='leading-[84px] font-bold text-[70px] mb-[39px]'>Log in</h1>
			<div className='flex flex-col space-y-5 items-center'>
				<div className='flex flex-col justify-center items-center space-y-5'>
					{/* Username atau Email */}
					<div className='w-[551px] h-[82px] bg-white opacity-60 border-2 border-gray-500 rounded-[15px] flex items-center gap-4 py-2 px-4'>
						<div className='w-[50px] h-full bg-transparent flex items-center justify-center'>
							<HiUser className='text-black w-[50px] h-[50px] bg-transparent' />
						</div>
						<input
							type='text'
							value={userEmail}
							readOnly
							className='w-full h-full bg-transparent outline-none placeholder:text-[#6B7280] placeholder:text-2xl placeholder:tracking-[0.08em] text-2xl font-semibold'
						/>
					</div>
					{/* Password */}
					<div className='flex flex-col'>
						<div className='w-[551px] h-[82px] bg-white border-2 border-gray-500 rounded-[15px] flex items-center gap-4 py-2 px-4'>
							<div className='w-[50px] h-full bg-transparent flex items-center justify-center'>
								<MdPassword className='text-black w-[50px] h-[50px] bg-transparent' />
							</div>
							<input
								type={showPassword ? 'text' : 'password'}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder='Password'
								className='w-full h-full bg-transparent outline-none placeholder:text-[#6B7280] placeholder:text-2xl placeholder:tracking-[0.08em] text-2xl font-semibold'
							/>
							<div className='w-[50px] h-full bg-transparent flex items-center justify-center'>
								<button
									type='button'
									onClick={() => setShowPassword((prev) => !prev)}
									className=' text-gray-500 hover:text-gray-700'
								>
									{showPassword ? <IoEyeOff size={26} /> : <IoEye size={26} />}
								</button>
							</div>
						</div>
						<div className='h-6 text-red-500 text-sm mt-1 '>
							{error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
						</div>
					</div>

					{/* Button Continue */}
					<Button
						variant='default'
						className='w-[267px] h-20 rounded-[15px] bg-[#296CF2] font-bold text-[22px] tracking-[0.08em] disabled:opacity-50'
						onClick={handleSubmit}
						disabled={isLoading}
					>
						{isLoading ? 'Logging in...' : 'Log in'}
					</Button>
					<Link href={'./'} className='cursor-pointer'>
						<Button variant={'link'}>Back to Log in Options</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
