'use client';

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import Typography from '@/app/shared/components/ui/Typography';

export default function HustlerHero({ hustler }: { hustler: any }) {
	return (
		<section
			className='bg-transparent rounded-2xl overflow-hidden mb-8 p-6'
			aria-labelledby='hustler-hero-heading'
		>
			<div className='flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12'>
				{/* Profile Image */}
				<div className='flex-shrink-0'>
					<Image
						src={hustler.profileImage}
						alt={`${hustler.name} profile picture`}
						width={152}
						height={152}
						className='object-cover rounded-full border-4 border-white shadow-md'
					/>
				</div>

				{/* Info Section */}
				<div className='flex flex-col w-full justify-evenly gap-4'>
					{/* Name + Rating */}
					<div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 sm:gap-4 md:gap-6 lg:gap-10'>
						<Typography id='hustler-hero-heading' variant='j1' color='primary'>
							{hustler.name}
						</Typography>
						<div className='flex md:flex-col min-w-36 items-center gap-2 xl:gap-0'>
							<div className='flex gap-2 items-center'>
								<FaStar className='md:w-6 lg:w-8 h-auto text-secondary' />
								<Typography variant='s2' as='p' color='secondary'>
									{hustler.rating}/5
								</Typography>
							</div>
							<div className='items-center'>
								<Typography variant='s2' as='p' color='secondary'>
									({hustler.reviewCount} reviews)
								</Typography>
							</div>
						</div>
					</div>

					{/* Short Description */}
					<Typography
						variant='h2'
						as='h2'
						color='secondary'
						className='text-justify'
					>
						{hustler.description}
					</Typography>
				</div>
			</div>
		</section>
	);
}
