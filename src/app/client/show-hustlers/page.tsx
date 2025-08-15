'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HustlersList } from '@/app/client/show-hustlers/components/HustlerList';
import { NavbarProfile } from '@/app/client/show-hustlers/components/NavbarProfile';
import { Button } from '@/app/shared/components/ui/button';
import { Footer } from '@/app/shared/components/widgets/Footer';

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
			<NavbarProfile />
			<div className='flex flex-col items-center justify-center w-full max-w-10xl mx-auto px-4 sm:px-6 lg:px-16'>
				<div className='flex w-full justify-start items-center'>
					<Link href='/features/clients/hustlers'>
						<Button
							variant={'ghost'}
							icon={
								<Image
									src='/icon/arrow-left.svg'
									alt='rocket'
									width={30}
									height={40}
									className='w-6 h-6 sm:w-[30px] sm:h-[40px]'
								/>
							}
							className='w-auto h-auto mt-16 mx-auto gap-6 shadow-muted-foreground bg-transparent hover:bg-transparent text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] hover:text-[#1F2937] cursor-pointer'
						>
							Full Stack Web Developer
						</Button>
					</Link>
				</div>
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
