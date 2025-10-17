'use client';

import { FaBagShopping } from 'react-icons/fa6';
import { MdChat } from 'react-icons/md';
import { Button } from '@/app/shared/components/ui/button';
import { Card, CardContent } from '@/app/shared/components/ui/card';
import Typography from '@/app/shared/components/ui/Typography';

interface ChatOrOfferCardProps {
	firstName: string;
	primaryCategory: string;
	startingPrice: number;
	minimumPayment: number;
}

export default function ChatOrOfferCard({
	firstName,
	primaryCategory,
	startingPrice,
	minimumPayment,
}: ChatOrOfferCardProps) {
	return (
		<Card className='bg-white rounded-2xl w-full h-full'>
			<CardContent className='px-4 h-full flex flex-col'>
				<div className='space-y-2'>
					<Typography variant='j3' as='h2' className='md:mb-6 lg:mb-6'>
						{primaryCategory}
					</Typography>
					<Typography variant='s1' as='p'>
						${minimumPayment} minimum payment
					</Typography>
					<Typography variant='b1' as='p'>
						You can chat or just offer {firstName} your project price
					</Typography>
				</div>
				<div className='flex-1 flex items-end pt-4'>
					<div className='flex w-full h-full justify-between gap-4'>
						<div className='w-full h-auto'>
							<Button className='flex flex-col justify-evenly w-full h-full items-center py-2 '>
								<MdChat size={10} className='!w-10 !h-10 xl:!w-15 xl:!h-15' />
								<Typography
									variant='s1'
									as='p'
									color='white'
									className='font-bold lg:text-base xl:text-2xl'
								>
									Chat Now
								</Typography>
							</Button>
						</div>
						<div className='w-full'>
							<Button
								variant='outline'
								className='flex flex-col justify-evenly w-full h-full items-center py-2 border-2 border-black bg-white hover:bg-background-secondary'
							>
								<FaBagShopping
									size={10}
									className='!w-10 !h-10 xl:!w-15 xl:!h-15'
								/>
								<Typography
									variant='s1'
									as='p'
									color='primary'
									className='font-bold lg:text-base xl:text-2xl'
								>
									Make Offer
								</Typography>
							</Button>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
