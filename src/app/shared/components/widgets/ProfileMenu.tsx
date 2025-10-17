'use client';

import Image from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/app/shared/components/ui/alert-dialog'; // sesuaikan path shadcn kamu
import { Button } from '@/app/shared/components/ui/button';

type ProfileMenuProps = {
	avatarUrl?: string;
	name?: string;
};

export default function ProfileMenu({ avatarUrl, name }: ProfileMenuProps) {
	const [open, setOpen] = useState(false); // dropdown
	const [dialogOpen, setDialogOpen] = useState(false); // alert dialog
	const [isLoggingOut, setIsLoggingOut] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	const { data: session } = useSession();
	const displayName = name ?? session?.user?.name ?? 'User';
	const displayAvatar = avatarUrl ?? '/avatar.png';

	// close dropdown saat klik di luar
	useEffect(() => {
		const onDocClick = (e: MouseEvent) => {
			if (!ref.current) return;
			if (!ref.current.contains(e.target as Node)) setOpen(false);
		};
		if (open) document.addEventListener('mousedown', onDocClick);
		return () => document.removeEventListener('mousedown', onDocClick);
	}, [open]);

	const handleLogout = async () => {
		try {
			setIsLoggingOut(true);
			await signOut({ callbackUrl: '/login' });
		} finally {
			setIsLoggingOut(false);
			setDialogOpen(false);
		}
	};

	return (
		<div className='relative' ref={ref}>
			{/* trigger dropdown */}
			<button
				type='button'
				onClick={() => setOpen((v) => !v)}
				className='flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1 hover:bg-gray-50'
				aria-haspopup='menu'
				aria-expanded={open}
			>
				<Image
					src={displayAvatar}
					alt='Profile'
					width={32}
					height={32}
					className='h-8 w-8 rounded-full object-cover'
				/>
				<span className='hidden md:block text-sm font-medium text-gray-700 max-w-[150px] truncate'>
					{displayName}
				</span>
				<svg
					className={`h-4 w-4 text-gray-500 transition ${open ? 'rotate-180' : ''}`}
					viewBox='0 0 20 20'
					fill='currentColor'
					aria-hidden='true'
				>
					<path
						fillRule='evenodd'
						d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z'
						clipRule='evenodd'
					/>
				</svg>
			</button>

			{/* dropdown menu */}
			{open && (
				<div
					role='menu'
					className='absolute right-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white py-2 shadow-lg z-50'
				>
					<div className='px-4 pb-2 text-xs text-gray-500'>Signed in as</div>
					<div className='px-4 pb-2 text-sm font-medium text-gray-900 truncate'>
						{displayName}
					</div>

					<div className='my-2 h-px bg-gray-100' />

					<Link
						href='/profile'
						role='menuitem'
						className='flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'
						onClick={() => setOpen(false)}
					>
						<svg className='h-4 w-4' viewBox='0 0 24 24' fill='none'>
							<path
								d='M12 12a5 5 0 100-10 5 5 0 000 10zM4 20a8 8 0 1116 0v1H4v-1z'
								stroke='currentColor'
								strokeWidth='1.5'
							/>
						</svg>
						Profile
					</Link>

					<button
						role='menuitem'
						className='flex w-full items-center gap-3 px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50'
						onClick={() => {
							setDialogOpen(true); // buka dialog
							setOpen(false); // tutup dropdown (dialog tetap tampil karena di luar dropdown)
						}}
					>
						<svg className='h-4 w-4' viewBox='0 0 24 24' fill='none'>
							<path
								d='M15 12H9m11-5a2 2 0 00-2-2H6a2 2 0 00-2 2v1h16V7zM5 7l1.5 12.5A2 2 0 008.5 21H15.5a2 2 0 002-1.5L19 7'
								stroke='currentColor'
								strokeWidth='1.5'
							/>
						</svg>
						Logout
					</button>
				</div>
			)}

			{/* AlertDialog diposisikan DI LUAR dropdown agar tidak ikut unmount */}
			<AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
				<AlertDialogContent className='bg-white'>
					<AlertDialogHeader>
						<AlertDialogTitle>Log out?</AlertDialogTitle>
						<AlertDialogDescription>
							You will be signed out from this device.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel asChild>
							<Button
								variant='outline'
								className='bg-white border-gray-200 shadow hover:bg-gray-100'
								disabled={isLoggingOut}
							>
								Cancel
							</Button>
						</AlertDialogCancel>
						<AlertDialogAction asChild>
							<Button
								onClick={handleLogout}
								disabled={isLoggingOut}
								className='bg-red-600 hover:bg-red-700'
							>
								{isLoggingOut ? 'Signing out...' : 'Logout'}
							</Button>
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
}
