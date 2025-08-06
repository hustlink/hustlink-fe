// components/Verification.tsx
export default function SignUpVerification() {
	return (
		<div className='bg-white w-[600px] h-[400px] rounded-xl shadow-xl p-6 flex flex-col justify-center items-center'>
			<h2 className='text-2xl font-bold mb-4'>Check Your Email</h2>
			<p className='text-gray-600'>
				We’ve sent a verification link to your email. Please check your inbox
				and follow the instructions.
			</p>
		</div>
	);
}
