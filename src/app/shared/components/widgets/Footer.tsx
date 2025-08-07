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

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export default function Footer() {
	return (
		<footer className='bg-white text-black py-10'>
			<div
				className={`w-full mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 ${poppins.className}`}
			>
				{/* Logo Column */}
				<div className='flex items-start gap-x-1'>
					<Image
						src='/logo-navbar.svg'
						alt='Hustlink Logo'
						width={42}
						height={42}
						className='w-[80px] h-auto mt-[-24px]'
					/>
					<span className='text-2xl font-bold'>
						Hust<span className='text-blue-500'>link</span>
					</span>
				</div>

				{/* Other Columns */}
				<div>
					<h3 className='text-2xl font-bold mt-1 mb-4 text-left '>Product</h3>
					<ul className='space-y-3 text-sm text-blue-500'>
						<li>
							<a href='#'>IT Development</a>
						</li>
						<li>
							<a href='#'>Creative & Design</a>
						</li>
						<li>
							<a href='#'>Writing & Translation</a>
						</li>
						<li>
							<a href='#'>Skilled Trades & ..</a>
						</li>
						<li>
							<a href='#'>Engineering & Arch</a>
						</li>
						<li>
							<a href='#'>Music & Audio</a>
						</li>
						<li>
							<a href='#'>Business</a>
						</li>
						<li>
							<a href='#'>Finance</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 className='text-2xl font-bold mt-1 mb-4 text-left space-y-2'>
						For Clients
					</h3>
					<ul className='space-y-3 text-sm text-blue-500'>
						<li>
							<a href='#'>How to hire</a>
						</li>
						<li>
							<a href='#'>Quality huide</a>
						</li>
						<li>
							<a href='#'>Business solution</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 className='text-2xl font-bold mt-1 mb-4 text-left space-y-2'>
						For Freelancers
					</h3>
					<ul className='space-y-3 text-sm text-blue-500'>
						<li>
							<a href='#'>How to hustle</a>
						</li>
						<li>
							<a href='#'>Quality Guide</a>
						</li>
						<li>
							<a href='#'>Hustlink Plus</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 className='text-2xl font-bold mb-4 mt-1 text-left space-y-2'>
						Company
					</h3>
					<ul className='space-y-3 text-sm text-blue-500'>
						<li>
							<a href='#'>About us</a>
						</li>
						<li>
							<a href='#'>Contact us</a>
						</li>
					</ul>
				</div>
			</div>
			{/* Bottom Row: Copyright + Socials */}
			<div className='w-full mx-auto px-10 mt-8 pt-4 border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm'>
				<div className='flex items-center gap-2'>
					<MdCopyright className='text-2xl' />
					<span className='text-black font-bold'>Hustlink 2025</span>
				</div>
				{/* <p className='mb-2 text-3xl font-bold sm:mb-0'>© Hustlink 2025</p> */}
				<div className='flex gap-4 text-3xl'>
					{/* Replace with SVGs or external links as needed */}
					<a
						href='https://facebook.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaFacebook className='text-4xl hover:text-blue-700' />
					</a>
					<a
						href='https://instagram.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaInstagram className='text-4xl hover:text-orange-500' />
					</a>
					<a href='https://t.me' target='_blank' rel='noopener noreferrer'>
						<FaXTwitter className='text-4xl hover:text-sky-400' />
					</a>
					<a href='https://t.me' target='_blank' rel='noopener noreferrer'>
						<FaTiktok className='text-4xl hover:text-cyan-300' />
					</a>
					<a href='https://t.me' target='_blank' rel='noopener noreferrer'>
						<FaYoutube className='text-4xl hover:text-red-600' />
					</a>
					<a href='https://t.me' target='_blank' rel='noopener noreferrer'>
						<FaTelegram className='text-4xl hover:text-sky-400' />
					</a>
				</div>
			</div>
		</footer>
	);
}
