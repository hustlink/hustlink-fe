// components/Footer.tsx

import { Poppins } from 'next/font/google';
import Image from 'next/image';
import {
	FaFacebook,
	FaInstagram,
	FaTelegram,
	FaTiktok,
	FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdCopyright } from 'react-icons/md';
import Typography from '../ui/Typography';

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export default function Footer() {
	return (
		<footer className='bg-white text-black py-10'>
			<div
				className={`w-full mx-auto pl-[10%] sm:pl-[20%] md:pl-10 md:pr-5 lg:px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 ${poppins.className}`}
			>
				{/* Logo Column */}
				<div className='hidden lg:inline-flex h-fit items-center gap-x-1 md:mt-[-2px] lg:mt-[-8px] xl:mt-[-10px] '>
					<Image
						src='/logo-navbar.svg'
						alt='Hustlink Logo'
						width={42}
						height={42}
						className='md:w-[40px] lg:w-[60px] xl:w-[70px] h-auto'
					/>
					<Typography variant='j3' as='h1'>
						Hust<span className='text-blue-500'>link</span>
					</Typography>
				</div>

				{/* Other Columns */}
				<div>
					<Typography variant='j3' as='h3' className='mt-2 mb-4 text-left'>
						Product
					</Typography>
					<ul className='space-y-3 text-sm text-blue-500'>
						<li>
							<Typography variant='b3' as='a' color='main-blue'>
								IT Development
							</Typography>
						</li>
						<li>
							<Typography variant='b3' as='a' color='main-blue'>
								Creative & Design
							</Typography>
						</li>
						<li>
							<Typography variant='b3' as='a' color='main-blue'>
								Writing & Translation
							</Typography>
						</li>
						<li>
							<Typography variant='b3' as='a' color='main-blue'>
								Skilled Trades & ..
							</Typography>
						</li>
						<li>
							<Typography variant='b3' as='a' color='main-blue'>
								Engineering & Arch
							</Typography>
						</li>
						<li>
							<Typography variant='b3' as='a' color='main-blue'>
								Music & Audio
							</Typography>
						</li>
						<li>
							<Typography variant='b3' as='a' color='main-blue'>
								Business
							</Typography>
						</li>
						<li>
							<Typography variant='b3' as='a' color='main-blue'>
								Finance
							</Typography>
						</li>
					</ul>
				</div>

				<div>
					<Typography variant='j3' as='h3' className='mt-2 mb-4 text-left'>
						For Clients
					</Typography>
					<ul className='space-y-3 text-sm text-blue-500'>
						<li>
							<Typography variant='b3' as='a' color='main-blue'>
								How to hire
							</Typography>
						</li>
						<li>
							<Typography variant='b3' as='a' color='main-blue'>
								Quality huide
							</Typography>
						</li>
						<li>
							<Typography variant='b3' as='a' color='main-blue'>
								Business solution
							</Typography>
						</li>
					</ul>
				</div>

				<div>
					<Typography variant='j3' as='h3' className='mt-2 mb-4 text-left'>
						For Freelancers
					</Typography>
					<ul className='space-y-3 text-sm text-blue-500'>
						<li>
							<Typography variant='b3' as='a' color='main-blue'>
								How to hustle
							</Typography>
						</li>
						<li>
							<Typography variant='b3' as='a' color='main-blue'>
								Quality Guide
							</Typography>
						</li>
						<li>
							<Typography variant='b3' as='a' color='main-blue'>
								Hustlink Plus
							</Typography>
						</li>
					</ul>
				</div>

				<div>
					<Typography variant='j3' as='h3' className='mt-2 mb-4 text-left'>
						Company
					</Typography>
					<ul className='space-y-3 text-sm text-blue-500'>
						<li>
							<Typography variant='b3' as='a' color='main-blue' href='#'>
								About us
							</Typography>
						</li>
						<li>
							<Typography variant='b3' as='a' color='main-blue'>
								Contact us
							</Typography>
						</li>
					</ul>
				</div>
			</div>
			{/* Bottom Row: Copyright + Socials */}
			<div className='w-full mx-auto px-10 mt-8 pt-4 border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm'>
				<div className='flex items-center gap-2 mb-6 sm:mb-0'>
					<MdCopyright className='text-2xl' />
					<span className='text-black font-bold'>Hustlink 2025</span>
				</div>
				{/* <p className='mb-2 text-3xl font-bold sm:mb-0'>© Hustlink 2025</p> */}
				<div className='flex gap-4 items-center'>
					{/* Replace with SVGs or external links as needed */}
					<a
						href='https://facebook.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaFacebook className='text-3xl lg:text-4xl hover:text-blue-700' />
					</a>
					<a
						href='https://instagram.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaInstagram className='text-4xl hover:text-orange-500' />
					</a>
					<a href='https://t.me' target='_blank' rel='noopener noreferrer'>
						<FaXTwitter className='text-3xl lg:text-4xl hover:text-sky-400' />
					</a>
					<a href='https://t.me' target='_blank' rel='noopener noreferrer'>
						<FaTiktok className='text-3xl lg:text-4xl hover:text-cyan-300' />
					</a>
					<a href='https://t.me' target='_blank' rel='noopener noreferrer'>
						<FaYoutube className='text-3xl lg:text-4xl hover:text-red-600' />
					</a>
					<a href='https://t.me' target='_blank' rel='noopener noreferrer'>
						<FaTelegram className='text-3xl lg:text-4xl hover:text-sky-400' />
					</a>
				</div>
			</div>
		</footer>
	);
}

export { Footer };
