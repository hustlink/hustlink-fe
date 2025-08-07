'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import Navbar from '@/app/features/clients/hustlers/components/NavbarHustlers';
import { Button } from '@/app/shared/components/ui/button';
import Footer from '@/app/shared/components/widgets/Footer';
import { Hustler } from '@/types/hustler';
import HustlersList from './components/HustlersList';

export default function HustlersPage() {
	return (
		<div className="flex flex-col w-full min-h-screen bg-[#DFE7F2] bg-[url('/image/hustler/hustler-background.svg')] bg-top bg-repeat bg-auto antialiased">
			<Navbar />
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
			<div className='flex w-full bg-[#B7CAEF] py-12 px-[5%]'>
				<div className='flex flex-col w-[60%] h-auto justify-center items-center'>
					<Image
						src='/benefit-landing.svg'
						alt='Hustler Benefits'
						width={563}
						height={581}
					/>
				</div>
				<div className='flex flex-col w-[40%] h-auto justify-start items-start text-[#1F2937] p-x-4 '>
					<h1 className='text-7xl font-bold mb-16'>
						How it <span className='text-[#296CF2]'>works?</span>
					</h1>
					<h2 className='text-3xl font-semibold mb-3.5'>
						1. Look for Hustler that you want to hire
					</h2>
					<p className='font-medium text-[#6B7280] mb-6'>
						Hustlink is built to empower local talent, creting more job
						opportunities for Indonesian freelancers in the digital space.
					</p>
					<h2 className='text-3xl font-semibold mb-3.5'>
						2. Make the project that you want
					</h2>
					<p className='font-medium text-[#6B7280] mb-6'>
						New freelancers can grow and build their reputation through micro
						projects and a fair rating system.
					</p>
					<h2 className='text-3xl font-semibold mb-3.5'>
						3. Chat and discuss about the price
					</h2>
					<p className='font-medium text-[#6B7280] mb-6'>
						Earn more from your hard work with lower platform fees compared to
						other freelance websites.
					</p>
					<h2 className='text-3xl font-semibold mb-3.5'>
						4. Manage your project with our tool
					</h2>
					<p className='font-medium text-[#6B7280] mb-6'>
						Earn more from your hard work with lower platform fees compared to
						other freelance websites.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
