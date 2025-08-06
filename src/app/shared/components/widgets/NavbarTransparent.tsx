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
		<header className='w-full bg-transparent bg-no-repeat z-50 relative antialiased'>
			<nav className='mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between'>
				{/* Left section */}
				<div className='flex items-center space-x-1.5 font-bold'>
					<Image
						src='/logo-navbar.svg'
						alt='logo'
						width={80}
						height={80}
						unoptimized
						className='w-auto h-[80px]'
					/>
					<a href='/' className='text-[19px]'>
						Hust<span className='text-blue-600'>link</span>
					</a>
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
				<div className='md:hidden bg-transparent px-4 py-3 space-y-4'>
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
