'use client';

import { useRouter } from 'next/navigation';
import { FaGoogle } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

export default function SignupMethod() {
	const router = useRouter();

	return (
		<div className='bg-[#DFE7F2] shadow-xl rounded-xl w-[800px] h-[400px] p-6 justify-center items-center my-auto'>
			<div className='flex mb-6 mt-4'>
				<button className='flex-1 bg-blue-600 text-white py-2 rounded-xl mt-4 mb-4'>
					Sign Up
				</button>
				<button className='flex-1 bg-blue-100 text-blue-600 py-2 rounded-xl mb-4'>
					Log In
				</button>
			</div>

			<div className='flex flex-col gap-3'>
				<button
					onClick={() => router.push('src/general/auth/components/SignUpForm')}
					className='w-90 flex items-center justify-center mx-auto  border-2 border-black text-black-800 py-2 hover:bg-blue-500 transition rounded-full h-14'
				>
					Continue with username{' '}
					<span className='ml-4'>
						<MdOutlineEmail />
					</span>
				</button>
				<button className='w-90 flex items-center justify-center mx-auto  border-2 border-black text-gray-800 rounded-full hover:bg-blue-500 transition h-14'>
					Continue with Google{' '}
					<span className='ml-4'>
						<FaGoogle />
					</span>
				</button>
			</div>

			<br />
			<br />
			<div className='flex justify-center items-center space-x-2'>
				<input
					type='checkbox'
					id='agree'
					className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
				/>
				<label htmlFor='agree' className='text-sm text-gray-700'>
					By joining, you agree to the Hustlink{' '}
					<span className='text-blue-500'>Terms of Service</span> and to
					occasionally receive emails from us. Please read our{' '}
					<span className='text-blue-500'>Privacy Policy</span> to learn how we
					use your personal data.
				</label>
			</div>
		</div>
	);
}
