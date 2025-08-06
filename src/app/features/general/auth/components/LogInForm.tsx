'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
import { FaGoogle, FaPhone } from 'react-icons/fa';
import { HiUser } from 'react-icons/hi';
import { Button } from '@/app/shared/components/ui/button';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

type LogInFormProps = {
	onContinue: (email: string) => void;
};

export default function LogInForm({ onContinue }: LogInFormProps) {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	const handleContinue = () => {
		if (!email.trim()) {
			setError('Email or username is required.');
			return;
		}
		setError('');
		onContinue(email.trim());
	};

	return (
		<div
			className={`flex flex-col py-14 items-center min-h-screen ${inter.className}`}
		>
			<h1 className='leading-[84px] font-bold text-[70px] mb-[39px]'>Log in</h1>
			<div className='flex flex-col space-y-5 items-center'>
				<h2 className='font-semibold text-[26px] text-[#6B7280]'>
					Don’t have account?&nbsp;
					<Link href='/register' className='underline text-blue-600'>
						Sign up here
					</Link>
				</h2>
				<div className='flex flex-col justify-center items-center space-y-5'>
					{/* Input Email + Error handling*/}
					<div>
						<div className='w-[551px] h-[82px] bg-white border-2 border-gray-500 rounded-[15px] flex items-center gap-4 py-2 px-4'>
							<div className='w-[50px] h-full bg-transparent flex items-center justify-center'>
								<HiUser className='text-black w-[50px] h-[50px] bg-transparent' />
							</div>
							<input
								type='text'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder='Username or Email'
								className='w-full h-full bg-transparent outline-none placeholder:text-[#6B7280] placeholder:text-2xl placeholder:tracking-[0.08em] text-2xl font-semibold'
							/>
						</div>
						{error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
					</div>

					{/* Button Continue */}
					<Button
						variant='default'
						className='w-full h-20 rounded-[15px] bg-[#296CF2] font-bold text-[22px] tracking-[0.08em]'
						onClick={handleContinue}
					>
						Continue
					</Button>

					{/* OR separator */}
					<div className='flex space-x-1 w-full h-5 items-center'>
						<hr className='bg-black w-full h-0.5' />
						<p className='leading-5 text-[23px] text-[#6B7280] bg-[#D1D8E3] tracking-[0.08em] font-semibold'>
							or
						</p>
						<hr className='bg-black w-full h-0.5' />
					</div>

					{/* Button Phone */}
					<Button
						variant='outline'
						icon={
							<FaPhone className='!w-[50px] !h-[50px] lg:mx-2 text-black bg-transparent' />
						}
						iconPosition='left'
						className='w-full h-20 gap-4 bg-white justify-start font-bold text-[22px] text-[#6B7280] tracking-[0.08em] rounded-[15px] border-2 border-gray-500 hover:border-gray-300'
					>
						Continue with phone number
					</Button>

					{/* Button Google */}
					<Button
						variant='outline'
						icon={
							<FaGoogle className='!w-[50px] !h-[50px] lg:mx-2 text-black bg-transparent' />
						}
						iconPosition='left'
						className='w-full h-20 gap-4 bg-white justify-start font-bold text-[22px] text-[#6B7280] tracking-[0.08em] rounded-[15px] border-2 border-gray-500 hover:border-gray-300'
					>
						Continue with Google account
					</Button>
				</div>
			</div>
		</div>
	);
}
