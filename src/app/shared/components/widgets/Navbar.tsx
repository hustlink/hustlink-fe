'use client';

import Image from 'next/image';
import Link from 'next/link';

import React, { useState } from 'react';

interface NavbarProps {
	leftContent?: React.ReactNode;
	rightContent?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ leftContent, rightContent }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className='w-full bg-white shadow-md z-50 relative'>
			<nav className='mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-[#1F2937]'>
				{/* Left section */}
				<div className='flex items-center space-x-1.5 font-bold'>
					<Link href='/'>
						<Image
							src='/logo-navbar.svg'
							alt='logo'
							width={50}
							height={48}
							unoptimized
							className='w-[50px] h-auto'
						/>
					</Link>
					{/* Desktop nav links */}
					<div className='hidden md:flex items-center space-x-4'>
						{leftContent}
					</div>
				</div>

				{/* Right section + Hamburger */}
				<div className='flex items-center space-x-4 '>
					{/* Right content (always visible on desktop) */}
					<div className='hidden md:flex items-center space-x-4'>
						{rightContent}
					</div>

					{/* Hamburger button (only on mobile) */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className='md:hidden'
					>
						{isMobileMenuOpen ? '✖' : '☰'}
					</button>
				</div>
			</nav>

			{/* Mobile dropdown menu */}
			{isMobileMenuOpen && (
				<div className='md:hidden bg-white shadow-md px-4 py-3 space-y-4'>
					{leftContent && (
						<div className='flex flex-col space-y-2'>{leftContent}</div>
					)}
					{rightContent && (
						<div className='flex flex-col space-y-2 border-t pt-3'>
							{rightContent}
						</div>
					)}
				</div>
			)}
		</header>
	);
};

export { Navbar };
