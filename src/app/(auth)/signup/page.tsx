import { SignupMethod } from '@/app/(auth)/signup/components/SignUpMethod';
import { Navbar } from '@/app/shared/components/widgets/Navbar'



export default function SignupPage() {
	return (
		<>
		<Navbar />
		<div className='flex flex-col items-center justify-center bg-[#DFE7F2] mt-4'>
			<div className='flex flex-col mb-2 justify-center items-center'>
			{/* Page Title */}
			<h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-2'>
				Sign up
			</h1>
			<h1 className='text-sm md:text-4xl font-bold text-gray-800 mb-2'>
				Already have account? <a href='/login' className='text-blue-500'>Log in here</a>
			</h1>
			</div>
			<div className='flex justify-center bg-[#DFE7F2] shadow-xl rounded-xl w-[800px] h-full-screen my-auto'>
				<SignupMethod />
			</div>
		</div>
		</>
	);
}

export { SignupPage };
