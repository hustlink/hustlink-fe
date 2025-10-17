'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
// shadcn/ui carousel
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/app/shared/components/ui/carousel';
import Typography from '@/app/shared/components/ui/Typography';

interface Showcase {
	title: string;
	role: string;
	period: string;
	technologies: string[];
	description: string;
	images: string[];
}

export default function HustlerPortfolio({
	showcases,
}: {
	showcases: Showcase[];
}) {
	const [activeShowcase, setActiveShowcase] = useState(0);

	if (!showcases || showcases.length === 0) return null;

	useEffect(() => {
		if (activeShowcase > showcases.length - 1) setActiveShowcase(0);
	}, [showcases.length, activeShowcase]);

	const currentShowcase = showcases[activeShowcase];
	const useThumbCarousel = showcases.length >= 3;

	return (
		<div className='mb-12'>
			<Typography variant='j3' as='h2' color='primary' className='mb-8'>
				My Showcases
			</Typography>

			<div className='px-6'>
				{/* Main Card */}
				<div className='bg-white rounded-2xl shadow-lg overflow-hidden mb-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 lg:h-[440px]'>
						{/* Left: Image area (carousel if >1 image) */}
						<div className='relative bg-gray-50 flex items-center justify-center'>
							{/* Pakai key agar reset ke slide pertama saat ganti showcase */}
							{currentShowcase.images?.length > 1 ? (
								<Carousel
									key={activeShowcase}
									opts={{ align: 'start' }}
									className='relative w-full h-full'
								>
									<CarouselContent>
										{currentShowcase.images.map((img, idx) => (
											<CarouselItem key={idx} className='basis-full'>
												<div className='relative w-full h-full min-h-[300px] lg:min-h-[400px]'>
													<Image
														src={img}
														alt={`${currentShowcase.title} - ${idx + 1}`}
														fill
														className='object-cover'
														priority={idx === 0}
													/>
												</div>
											</CarouselItem>
										))}
									</CarouselContent>

									{/* Controls (auto-hide saat tidak bisa scroll) */}
									<CarouselPrevious
										variant='default'
										className='bg-white/90 left-4 -translate-x-0 w-9 h-9 shadow text-primary hover:bg-white
                               disabled:invisible disabled:pointer-events-none'
									/>
									<CarouselNext
										variant='default'
										className='bg-white/90 right-4 -translate-x-0 w-9 h-9 shadow text-primary hover:bg-white
                               disabled:invisible disabled:pointer-events-none'
									/>

									{/* Image count badge */}
									<div className='pointer-events-none absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm'>
										{currentShowcase.images.length} images
									</div>
								</Carousel>
							) : (
								currentShowcase.images?.length > 0 && (
									<div className='relative w-full h-full min-h-[300px] lg:min-h-[400px]'>
										<Image
											src={currentShowcase.images[0]}
											alt={currentShowcase.title}
											fill
											className='object-cover'
										/>
									</div>
								)
							)}
						</div>

						{/* Right: Details */}
						<div className='px-10 flex flex-col justify-center'>
							<div className='space-y-8'>
								<div>
									<Typography
										variant='j2'
										as='h2'
										color='main-blue'
										className='mb-4'
									>
										{currentShowcase.title}
									</Typography>
									<Typography
										variant='h3'
										as='p'
										color='primary'
										className='mb-1'
									>
										{currentShowcase.role}
									</Typography>
									<Typography
										variant='b2'
										as='p'
										className='text-gray-500 mb-4'
									>
										{currentShowcase.period}
									</Typography>
								</div>

								{/* Technologies */}
								<div className='space-y-2'>
									<Typography variant='s2' as='p' color='primary'>
										Technologies:
									</Typography>
									<div className='flex flex-wrap gap-2'>
										{currentShowcase.technologies.map((tech, index) => (
											<span
												key={index}
												className='px-3 py-1 bg-gray-300 text-default rounded-full text-sm font-bold'
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								{/* Description */}
								<div className='space-y-2'>
									<Typography variant='s2' as='p' color='primary'>
										Description:
									</Typography>
									<Typography
										variant='b2'
										as='p'
										className='text-gray-600 leading-relaxed'
									>
										{currentShowcase.description}
									</Typography>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Thumbnails: carousel (≥3) atau grid (<3) */}
			{useThumbCarousel ? (
				<Carousel opts={{ align: 'start' }} className='w-full p-2 rounded-2xl'>
					<CarouselContent>
						{showcases.map((showcase, index) => {
							const isActive = activeShowcase === index;
							return (
								<CarouselItem
									key={index}
									className='basis-[80%] sm:basis-1/2 lg:basis-1/3'
								>
									<div
										onClick={() => setActiveShowcase(index)}
										className={`relative cursor-pointer rounded-2xl p-2 overflow-hidden transition-all duration-200
                      ${isActive ? 'scale-[1.03]' : 'hover:scale-[1.01]'}
                    `}
									>
										<div className='relative h-32 sm:h-40'>
											{showcase.images?.[0] && (
												<Image
													src={showcase.images[0]}
													alt={showcase.title}
													fill
													className='object-cover rounded-2xl'
												/>
											)}

											{/* Number bubble */}
											<div
												className={`absolute top-2 left-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm
                          ${isActive ? 'bg-gray-400 text-white' : 'bg-white/90 text-gray-800'}
                        `}
											>
												{index + 1}
											</div>

											{/* Image count indicator */}
											{showcase.images.length > 1 && (
												<div className='absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs'>
													{showcase.images.length}
												</div>
											)}
										</div>
									</div>
								</CarouselItem>
							);
						})}
					</CarouselContent>

					<CarouselPrevious
						variant='default'
						className='bg-white -left-7 w-8 h-8 shadow-lg text-primary hover:bg-background-secondary
                       disabled:invisible disabled:pointer-events-none'
					/>
					<CarouselNext
						variant='default'
						className='bg-white -right-7 w-8 h-8 shadow-lg text-primary hover:bg-background-secondary
                       disabled:invisible disabled:pointer-events-none'
					/>
				</Carousel>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-2'>
					{showcases.map((showcase, index) => {
						const isActive = activeShowcase === index;
						return (
							<div
								key={index}
								onClick={() => setActiveShowcase(index)}
								className={`relative cursor-pointer rounded-2xl p-2 overflow-hidden shadow-md transition-all duration-200
                  ${isActive ? 'ring-2 ring-gray-400 scale-[1.02]' : 'hover:scale-[1.01]'}
                `}
							>
								<div className='relative h-32 sm:h-40'>
									{showcase.images?.[0] && (
										<Image
											src={showcase.images[0]}
											alt={showcase.title}
											fill
											className='object-cover rounded-2xl'
										/>
									)}

									<div
										className={`absolute top-2 left-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm
                      ${isActive ? 'bg-gray-400 text-white' : 'bg-white/90 text-gray-800'}
                    `}
									>
										{index + 1}
									</div>

									{showcase.images.length > 1 && (
										<div className='absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs'>
											{showcase.images.length}
										</div>
									)}
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
