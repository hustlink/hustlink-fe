'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineMail } from 'react-icons/md';
import { Button } from '@/app/shared/components/ui/button';
import { Navbar } from '@/app/shared/components/widgets/Navbar';

export default function NavbarLanding() {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	return (
		<Navbar
			leftContent={
				<>
					{/* <Link href="/dashboard" className="hover:text-[#2563EB] font-bold">Hire Talent</Link>*/}
					<div className='relative tracking-[0.04em]'>
						<button
							className='flex items-center font-bold hover:text-[#2563EB]'
							onClick={() => setDropdownOpen(!dropdownOpen)}
						>
							Hire Talent
							<MdOutlineKeyboardArrowDown className='ml-1 w-6 h-auto' />
						</button>

						{/* Dropdown menu */}
						{dropdownOpen && (
							<div className='absolute top-full left-0 mt-2 w-48 bg-white border shadow-lg rounded-md z-50'>
								<Link
									href='/client/show-hustlers'
									className='block px-4 py-2 hover:bg-gray-100'
								>
									Find Freelancers
								</Link>
								<Link
									href='/post-job'
									className='block px-4 py-2 hover:bg-gray-100'
								>
									Post a Job
								</Link>
								<Link
									href='/talent-pool'
									className='block px-4 py-2 hover:bg-gray-100'
								>
									Talent Pool
								</Link>
							</div>
						)}
					</div>
					<Link href='/dashboard' className='hover:text-[#2563EB] font-bold'>
						Become a Hustler
					</Link>
					<div className='relative tracking-[0.04em]'>
						<button
							className='flex items-center font-bold hover:text-[#2563EB]'
							onClick={() => setDropdownOpen(!dropdownOpen)}
						>
							How To Use
							<MdOutlineKeyboardArrowDown className='ml-1 w-6 h-auto' />
						</button>

						{/* Dropdown menu */}
						{dropdownOpen && (
							<div className='absolute top-full left-0 mt-2 w-48 bg-white border shadow-lg rounded-md z-50'>
								<Link
									href='/client/show-hustlers'
									className='block px-4 py-2 hover:bg-gray-100'
								>
									Find Freelancers
								</Link>
								<Link
									href='/post-job'
									className='block px-4 py-2 hover:bg-gray-100'
								>
									Post a Job
								</Link>
								<Link
									href='/talent-pool'
									className='block px-4 py-2 hover:bg-gray-100'
								>
									Talent Pool
								</Link>
							</div>
						)}
					</div>
					<Link href='/dashboard' className='hover:text-[#2563EB] font-bold'>
						Pricing
					</Link>
				</>
			}
			rightContent={
				<>
					<Link href={'/login'}>
						<Button variant='ghost'>Login</Button>
					</Link>
					<Link href={'/register'}>
						<Button>Sign Up</Button>
					</Link>
				</>
			}
		/>
	);
}

export { NavbarLanding };
