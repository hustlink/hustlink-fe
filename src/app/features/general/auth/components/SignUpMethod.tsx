'use client';

import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import SignupForm from './SignUpForm';

export default function SignupMethod() {
	const [step, setStep] = useState<'select' | 'form' | 'verify'>('select');

	const [activeTab, setActiveTab] = useState<'client' | 'freelancer'>('client');

	 const handleGoogle = () => {
    window.location.href = '/api/auth/google';
  };

  const handleFormSubmit = () => {
    // After form submission
    setStep('verify');
  };

	return (
		<div className='bg-[#DFE7F2] shadow-xl rounded-xl w-[800px] h-full-screen justify-center my-auto'>
				<div className='flex mt- mb-2 justify-center items-center'>
							<div className='mt-4 mb-4 flex bg-blue-500 h-[40px] md:h-[48px] lg:h-[52px] rounded-full w-fit overflow-hidden'>
								<button
									className={`w-60 py-3 text-white font-semibold transition-all duration-200 ${
										activeTab === 'client'
											? 'bg-blue-900 rounded-full'
											: 'bg-transparent'
									}`}
									onClick={() => setActiveTab('client')}
								>
									Start as a client
								</button>
								<button
									className={`w-60 py-3 text-white font-semibold transition-all duration-200 ${
										activeTab === 'freelancer'
											? 'bg-blue-900 rounded-full'
											: 'bg-transparent'
									}`}
									onClick={() => setActiveTab('freelancer')}
								>
									Start as a freelancer
								</button>
							</div>
						</div>
			

{step === 'select' && (
			<div className='flex flex-col gap-3'>
				<button
					onClick={() => setStep('form') }
					className='w-[551px] h-[82px] bg-white opacity-60 border-2 border-gray-500 rounded-[15px] flex items-center justify-center mx-auto  py-2 hover:bg-blue-500 transition h-14'
				>
					Continue with username{' '}
					<span className='w-[50px] ml-4'>
						<MdOutlineEmail className='text-black w-[50px] h-[50px] bg-transparent'/>
					</span>
				</button>
				<button className='w-[551px] h-[82px] bg-white opacity-60 border-2 border-gray-500 rounded-[15px] flex items-center justify-center mx-auto  py-2 hover:bg-blue-500 transition h-14'>
					Continue with Google{' '}
					<span className='ml-4'>
						<FaGoogle className='text-black w-[50px] h-[50px] bg-transparent'/>
					</span>
				</button>
			</div>
)}

{step === 'form' && (
        <SignupForm onSuccess={() => setStep('verify')} onBack={() => setStep('select')} />
      )}

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
