import Image from 'next/image';
import { BiTargetLock } from 'react-icons/bi';

export default function AdvantageSection() {
	return (
		<section className='w-full bg-[#DFE7F2] py-16 px-4'>
			<div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify between md:h-full'>
				{/* Left Column */}
				<div className='md:w-[650px]'>
					<h2 className='text-7xl font-bold mb-4'>
						Many <span className='text-blue-500'> advantage</span> to your
						projects!
					</h2>
					{/* Right: Text */}
					<div className=' flex flex-col justify-start gap-3'>
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
							<h3 className='text-xl font-bold'>
								Opportunities for New Talent
							</h3>
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

				{/* Right Column */}
				<div className='relative md:w-[400px] left-[200px]'>
					<div className='relative items-end justify-end w-full md:h-full bg-blue-500 rounded-xl shadow-lg p-6 z-10 overflow-visible'>
						<h3 className='text-6xl font-bold mb-2 text-right text-white'>
							Simplify your projects with powerful tools
						</h3>

						{/* Image on bottom-left corner of card */}
						<div
							className='
              absolute 
              bottom-0 
              left-[-120px] 
              w-[250px] 
              md:left-[-150px]
              z-20
            '
						>
							<Image
								src='/advantage-section.svg'
								alt='Advantage'
								className='object-cover h-full w-full rounded-xl shadow-md'
								width={358}
								height={688}
							/>
						</div>
						<div className='absolute bottom-4 right-4 text-sm text-blue-900 font-medium hover:underline cursor-pointer'>
							<h2 className='text-2xl text-white font-bold'>Learn more</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
