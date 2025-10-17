import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/shared/components/ui/button';

export default function BackHeader() {
	return (
		<div className='flex flex-col items-center justify-center w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16'>
			<div className='flex w-full justify-start items-center'>
				<Link href='/client'>
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
		</div>
	);
}
