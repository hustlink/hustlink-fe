'use client';

// components/SignupForm.tsx
export default function SignUpForm({ onNext }: { onNext: () => void }) {
	return (
		<div className='bg-white w-[600px] h-[400px] rounded-xl shadow-xl p-6 flex flex-col justify-center items-center'>
			<h2 className='text-2xl font-bold mb-4'>Create Account</h2>

			<input
				type='text'
				placeholder='Username'
				className='mb-3 border border-gray-300 rounded p-2 w-full'
			/>
			<input
				type='email'
				placeholder='Email'
				className='mb-3 border border-gray-300 rounded p-2 w-full'
			/>
			<input
				type='password'
				placeholder='Password'
				className='mb-4 border border-gray-300 rounded p-2 w-full'
			/>

			<button
				onClick={onNext}
				className='bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition'
			>
				Sign Up
			</button>
		</div>
	);
}

export { SignUpForm };
