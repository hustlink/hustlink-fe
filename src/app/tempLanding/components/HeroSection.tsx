'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function HeroSection() {
	const [activeTab, setActiveTab] = useState<'skills' | 'categories'>('skills');

	return (
		<section className='w-full max-w-screen-xl mx-auto px-4 py-8 ml-[99px]'>
			{/* Container 1: h1 & h2 */}
			<div className='mb-3'>
				<h1 className='text-7xl font-bold text-gray-800'>
					Turn Vision Into Action
				</h1>
				<h1 className='text-7xl font-bold text-gray-800'>
					With Our Freelancer
				</h1>
			</div>

			<div className='mb-8 flex flex-col md:flex-row items-start  gap-8'>
				{/* Kiri: Heading, Tab Buttons, Search */}
				<div className='mt-7  md:w-2/3 w-full flex flex-col gap-6'>
					<div className='bg-blue-200 rounded-[40px] p-4 md:p-6 w-full max-w-4xl mx-auto'>
						{/* Tab Buttons */}
						<div className='flex mt- mb-2 ml-[25px]'>
							<div className='mt-4 mb-4 flex bg-blue-500 h-[40px] md:h-[48px] lg:h-[52px] rounded-full w-fit overflow-hidden'>
								<button
									className={`w-40 py-3 text-white font-semibold transition-all duration-200 ${
										activeTab === 'skills'
											? 'bg-blue-900 rounded-full'
											: 'bg-transparent'
									}`}
									onClick={() => setActiveTab('skills')}
								>
									Skills
								</button>
								<button
									className={`w-40 py-3 text-white font-semibold transition-all duration-200 ${
										activeTab === 'categories'
											? 'bg-blue-900 rounded-full'
											: 'bg-transparent'
									}`}
									onClick={() => setActiveTab('categories')}
								>
									Categories
								</button>
							</div>
						</div>

						{/* Search Box */}
						<div className='flex'>
							<div className='mt-4 mb-4 ml-[25px] mr-[20px] flex items-center bg-white rounded-full px-4 py-2 w-full h-14 shadow-sm'>
								<input
									type='text'
									placeholder='Search by category in IT Development'
									className='flex-grow bg-transparent outline-none text-lg text-gray-700 placeholder-gray-400 gap-4 tracking-wide'
								/>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5 text-gray-500'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z'
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>

				{/* Kanan: Gambar Ilustrasi */}
				<div className='md:w-1/3 w-full flex justify-center md:justify-end'>
					<Image
						src='/4574122-removebg-preview 1.svg'
						alt='IT Illustration'
						width={140}
						height={140}
						className='w-full max-w-sm h-auto'
					/>
				</div>
			</div>
		</section>
	);
}

export { HeroSection };
