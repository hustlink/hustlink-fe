import '../../../../globals.css';
import 'tw-animate-css';
import Image from 'next/image';
import { FaEnvelope, FaUserCircle } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function Navbar() {
	return (
		<nav
			className='mx-auto h-[76px] px-4 sm:px-6 py-3 border-b flex items-center justify-between bg-white shadow-sm opacity-100'
			style={{ transform: 'rotate(0deg)' }}
		>
			{/* Kiri: Logo dan Menu */}
			<div className='flex items-center gap-6'>
				{/* Logo dan Brand Name */}
				<div className='flex items-center gap-2 w-[62px] h-[61px]'>
					<Image src='/logo.svg' alt='Logo' width={62} height={61} priority />
				</div>

				{/* Menu */}
				<ul className='hidden md:flex gap-4 text-lg font-medium text-gray-700'>
					<li className='flex items-center gap-1 hover:text-blue-600 cursor-pointer'>
						Hire Talent <IoMdArrowDropdown />
					</li>
					<li className='flex items-center gap-1 hover:text-blue-600 cursor-pointer'>
						My Projects <IoMdArrowDropdown />
					</li>
					<li className='hover:text-blue-600 cursor-pointer'>Pricing</li>
					<li className='hover:text-blue-600 cursor-pointer'>Message</li>
				</ul>
			</div>

			{/* Kanan: Icon Message & Profile */}
			<div className='flex items-center gap-6 text-xl text-gray-800'>
				<FaEnvelope className='w-7 h-7 cursor-pointer hover:text-blue-600' />
				<FaUserCircle className='w-7 h-7 cursor-pointer hover:text-blue-600' />
			</div>
		</nav>
	);
}
