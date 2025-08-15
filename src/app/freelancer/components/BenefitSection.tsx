import Image from 'next/image';
import { BiTargetLock } from 'react-icons/bi';

export default function BenefitSection() {
	return (
		<section className='min-h-screen px-6 py-12 flex items-start justify-center bg-[#B7CAEF]'>
			<div className='max-w-6xl w-full flex flex-col md:flex-row gap-8'>
				{/* Left: Image */}
				<div className='w-full md:w-1/2'>
					<Image
						src='/benefit-landing.svg'
						alt='Benefit Illustration'
						className='w-full h-auto rounded-xl'
						width={563}
						height={581}
					/>
				</div>

				{/* Right: Text */}
				<div className='w-full md:w-1/2 flex flex-col justify-start gap-3'>
					<h2 className='text-5xl font-bold mt-8 mb-8'>
						Enjoy your <span className='text-blue-500'>Benefits!</span>
					</h2>

					{/* Icon + Subtitle */}
					<div className='flex items-center gap-2 mt-8 mb-2'>
						<BiTargetLock className='text-blue-500 text-2xl' />
						<h3 className='text-xl font-bold'>Focus on Indonesian worker</h3>
					</div>

					{/* Description below subtitle */}
					<p className='mt-2 ml-8 text-sm text-gray-600 mb-4'>
						Hustlink is built to empower local talent, creting more job
						opportunities for Indonesian freelancers in the digital space
					</p>

					<div className='flex items-center gap-2 mb-2'>
						<BiTargetLock className='text-blue-500 text-2xl' />
						<h3 className='text-xl font-bold'>Opportunities for New Talent</h3>
					</div>

					{/* Description below subtitle */}
					<p className='mt-2 ml-8 text-sm text-gray-600 mb-4'>
						New freelancers can grow and build their reputation through micro
						projects and a fair rating system.
					</p>

					<div className='flex items-center gap-2 mb-2'>
						<BiTargetLock className='text-blue-500 text-2xl' />
						<h3 className='text-xl font-bold'>Lower Commision Fees</h3>
					</div>

					{/* Description below subtitle */}
					<p className='mt-2 ml-8 text-sm text-gray-600'>
						Earn more from your hard work with lower platform fees compared to
						other freelance websites.
					</p>
				</div>
			</div>
		</section>
	);
}

export { BenefitSection };
