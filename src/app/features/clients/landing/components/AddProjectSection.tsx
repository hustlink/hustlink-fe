'use client';

import Image from 'next/image';

export default function AddProjectSection() {
	return (
		<section className='w-full bg-[#c8d7f0] py-16'>
			<div className='max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 mt-[94px] mb-[121px] ml-[109px]'>
				{/* Left Content */}
				<div className='flex-1flex-[58_1_0%]'>
					<h2 className='text-4xl md:text-6xl font-bold mb-8 text-gray-800'>
						Start your project now
						<br />
						with many <span className='text-blue-600'>advantage!</span>
					</h2>

					<ul className='space-y-6'>
						<li className='flex items-start gap-4'>
							<img
								src='/Vector (3).svg'
								alt='lock'
								className='w-[34px] h-[45px] mt-1'
							/>
							<div>
								<h4 className='font-semibold text-3xl text-gray-800'>
									Access to Local Talent
								</h4>
								<p className='text-gray-800 text-lg'>
									Connect with skilled Indonesian freelancers for quality work
									at competitive rates.
								</p>
							</div>
						</li>

						<li className='flex items-start gap-4'>
							<img
								src='/Vector (2).svg'
								alt='lock'
								className='w-[45px] h-[37px] mt-1'
							/>
							<div>
								<h4 className='font-semibold text-3xl text-gray-800'>
									Transparent & Secure Payment
								</h4>
								<p className='text-gray-800 text-lg'>
									Escrow system ensures you only pay when the work is delivered
									as agreed.
								</p>
							</div>
						</li>

						<li className='flex items-start gap-4'>
							<img
								src='/Vector (4).svg'
								alt='lock'
								className='w-[35px] h-[38px] mt-1'
							/>
							<div>
								<h4 className='font-semibold text-3xl text-gray-800'>
									Direct Communication
								</h4>
								<p className='text-gray-800 text-lg'>
									Chat directly with freelancers to clarify details and speed up
									collaboration.
								</p>
							</div>
						</li>
					</ul>
				</div>

				{/* Right CTA Button */}
				<div className='mt-[180px] flex-[42_1_0%] flex justify-center'>
					<button className='bg-blue-600 text-white rounded-[60px] px-8 py-16 shadow-xl hover:bg-blue-700 transition-all duration-300 w-[482px] h-[356px] flex flex-col justify-center items-center text-center'>
						<div className='w-[101px] h-[113px] mb-4 relative'>
							<Image
								src='/Group (1).svg'
								alt='Start New Project Icon'
								layout='fill'
								objectFit='contain'
							/>
						</div>
						<span className='text-5xl font-semibold'>Start New Project</span>
					</button>
				</div>
			</div>
		</section>
	);
}
