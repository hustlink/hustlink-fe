'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/app/shared/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/app/shared/components/ui/carousel';

export default function HustlerAdCarousel({ images }: { images: string[] }) {
	return (
		<Carousel className='w-full max-w-4xl'>
			<CarouselContent>
				{images.map((src, index) => (
					<CarouselItem key={index}>
						<div>
							<Card className='overflow-hidden rounded-2xl bg-white border-0'>
								<CardContent className='flex aspect-video items-center justify-center p-0'>
									<Image
										src={src}
										alt={`Advertisement ${index + 1}`}
										width={800}
										height={450}
										className='w-full h-full object-cover'
									/>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious
				variant='default'
				className='bg-white -left-6 w-10 h-10 shadow-lg text-primary hover:bg-background-secondary'
			/>
			<CarouselNext
				variant='default'
				className='bg-white -right-6 w-10 h-10 shadow-lg text-primary hover:bg-background-secondary'
			/>
		</Carousel>
	);
}
