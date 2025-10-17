'use client';

import Image from 'next/image';
import { HustlersList } from '@/app/client/show-hustlers/components/HustlerList';
import Navbar from '@/app/client/show-hustlers/components/NavbarProfile';
import { Footer } from '@/app/shared/components/widgets/Footer';
import BackHeader from '../components/BackHeader';

const steps = [
	{
		title: 'Look for Hustler that you want to hire',
		description:
			'Hustlink is built to empower local talent, creating more job opportunities for Indonesian freelancers in the digital space.',
	},
	{
		title: 'Make the project that you want',
		description:
			'New freelancers can grow and build their reputation through micro projects and a fair rating system.',
	},
	{
		title: 'Chat and discuss about the price',
		description:
			'Earn more from your hard work with lower platform fees compared to other freelance websites.',
	},
	{
		title: 'Manage your project with our tool',
		description:
			'Earn more from your hard work with lower platform fees compared to other freelance websites.',
	},
];

export default function HustlersPage() {
	return (
		<div className="flex flex-col w-full min-h-screen bg-[#DFE7F2] bg-[url('/image/client/hustler-background.svg')] bg-center bg-no-repeat bg-cover antialiased">
			<Navbar />
			<BackHeader />
			<div className='flex flex-col max-w-screen-2xl items-center justify-center w-full max-w-10xl mx-auto px-4 sm:px-6 lg:px-16'>
				<HustlersList />
			</div>
			<div className='grid grid-cols-2 w-full bg-[#B7CAEF] py-16 px-20 gap-x-8'>
				<div className='flex flex-col h-auto justify-center items-center'>
					<Image
						src='/benefit-landing.svg'
						alt='Hustler Benefits'
						width={563}
						height={581}
					/>
				</div>
				<div className='flex flex-col h-auto px-10 justify-start items-start text-[#1F2937]'>
					<h1 className='text-7xl font-bold mb-16'>
						How it <span className='text-[#296CF2]'>works?</span>
					</h1>
					<div className='flex flex-col space-y-0'>
						{steps.map((step, index) => (
							<div key={index} className='flex flex-col'>
								<h2 className='text-3xl font-semibold mb-3.5'>
									{index + 1}. {step.title}
								</h2>
								<p className='font-medium text-[#6B7280] mb-6 leading-5'>
									{step.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
