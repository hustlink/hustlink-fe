'use client';

// import 'tw-animate-css';
import Image from 'next/image';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function NavbarLanding() {
	return (
		<nav
			className='mx-auto h-[76px] px-4 sm:px-6 py-3 border-b flex items-center justify-between bg-white shadow-sm opacity-100'
			style={{ transform: 'rotate(0deg)' }}
		>
			{/* Kiri: Logo dan Menu */}
			<div className='flex items-center gap-6'>
				{/* Logo dan Brand Name */}
				<div className='flex items-center gap-2 w-[62px] h-[61px]'>
					<Image
						src='/logo-navbar.svg'
						alt='Logo'
						width={62}
						height={61}
						priority
					/>
				</div>

				{/* Menu */}
				<ul className='hidden md:flex gap-5 text-base font-medium text-gray-700'>
					<li className='flex items-center gap-1 hover:text-blue-600 cursor-pointer'>
						Hire Talent <IoMdArrowDropdown />
					</li>
					<li className='flex items-center gap-1 hover:text-blue-600 cursor-pointer'>
						How To Use
					</li>
					<li className='hover:text-blue-600 cursor-pointer'>Pricing</li>
					<li className='hover:text-blue-600 cursor-pointer'>
						Project Management
					</li>
				</ul>
			</div>

			{/* Kanan: Icon Message & Profile */}
			<div className='flex items-center gap-7 text-xl text-gray-800'>
				<Image
					src='/vector.svg'
					alt='notification'
					width={29}
					height={37}
					priority
				/>
				<Image
					src='/Vector (1).svg'
					alt='inbox'
					width={31}
					height={37}
					priority
				/>
				<Image src='/group.svg' alt='profile' width={35} height={35} priority />
			</div>
		</nav>
	);
}

export { NavbarLanding };
