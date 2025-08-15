// components/HustlerCard.tsx
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { Hustler } from '@/types/hustler';

type Props = {
	hustler: Hustler;
};

export default function HustlerCard({ hustler }: Props) {
	return (
		<div className='bg-white rounded-4xl shadow-lg p-5 w-full h-[300px] max-w-lg cursor-pointer hover:shadow-xl transition-shadow duration-200'>
			{/* Cover Image + Top Label */}
			<div className='relative w-full h-[182px] rounded-4xl overflow-hidden'>
				<Image
					src={hustler.coverImage}
					alt='Cover'
					fill
					className='object-cover'
				/>
				<div className='absolute bottom-0 md:left-20 lg:left-[100px] right-0 bg-[#2563EB] text-white px-4 py-1 rounded-br-xl flex items-center justify-between z-10'>
					<div className='md:ml-0 lg:ml-4 font-semibold md:text-sm lg:text-[16px] xl:text-lg'>
						{hustler.name}
					</div>
					<div>
						<Image
							src='/icon/arrow-right-white.svg'
							alt='Hustler Icon'
							width={24}
							height={24}
							className='w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4'
						/>
					</div>
				</div>

				{/* Top label */}
				{/* <div className="absolute top-2 left-2 bg-white px-2 py-1 text-sm font-bold rounded">
                    WEB DEVELOPER
                </div> */}
			</div>

			<div className='relative mt-[-70px] w-[92px] h-[92px] lg:w-[120px] lg:h-[120px] rounded-full overflow-hidden border-[4px] border-white shadow-md z-20'>
				<Image
					src={hustler.profileImage}
					alt='Profile'
					width={120}
					height={120}
					className='object-cover'
				/>
			</div>

			{/* Profile Image & Info */}
			{/* <div className="relative mt-[-70px] z-10 flex items-center"> */}
			{/* Profile photo */}
			{/* <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-[4px] border-white shadow-md">
                    <Image
                        src={hustler.profileImage}
                        alt="Profile"
                        width={120}
                        height={120}
                        className="object-cover"
                    />
                </div> */}

			{/* Name pill */}
			{/* <div className="ml-2 bg-[#2563EB] px-3 py-1 rounded-full flex items-center text-white font-semibold text-sm">
                    {hustler.name}
                </div> */}
			{/* </div> */}

			{/* Description */}
			{/* <p className="mt-2 text-sm text-gray-700">{hustler.description}</p> */}
			<div className='flex w-full h-10 mt-6 md:mt-0 lg:mt-[-48px] xl:mt-[-44px] items-start'>
				<div className='hidden w-[45%] lg:block lg:w-[55%] xl:w-[33%]'></div>
				<div className='w-full md:w-full lg:w-[45%] xl:w-[67%] text-sm text-black font-medium line-clamp-2'>
					{hustler.description}
				</div>
			</div>

			{/* Rating and Price */}
			<div className='md:mt-0 lg:mt-5 xl:mt-4 flex items-center justify-between text-sm xl:text-[16px]'>
				<div className='flex items-center text-gray-800 gap-1'>
					<FaStar className='text-blue-600' />
					<span>
						{hustler.rating}/5 ({hustler.reviewCount})
					</span>
				</div>
				<div className='text-[#2563EB] font-bold'>
					From ${hustler.startingPrice}
				</div>
			</div>
		</div>
	);
}

export { HustlerCard };
