import { SignUpMethod } from '@/app/auth/signup/components/SignUpMethod';

export default function SignUpPage() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4'>
			{/* Page Title */}
			<h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-2'>
				Create Your Account
			</h1>
			<h1 className='text-sm md:text-4xl font-bold text-gray-800 mb-2'>
				Already have account? <span className='text-blue-500'>Log in here</span>
			</h1>
			<div className='min-h-screen flex items-center justify-center bg-gray-100'>
				<SignUpMethod />
			</div>
		</div>
	);
}
