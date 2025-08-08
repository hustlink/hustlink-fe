'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import LogInEmailForm from '@/app/features/general/auth/components/LogInEmailForm';
import { Navbar } from '@/app/shared/components/widgets/NavbarTransparent';

export default function LoginWithUserEmailPage() {
	const searchParams = useSearchParams();
	const email = searchParams.get('email') ?? '';

	return (
		<div className="flex flex-col w-full min-h-screen bg-[#DFE7F2] bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat antialiased">
			<Navbar
				leftContent={
					<>
						<Link href='/' className='text-[19px] text-[#1F2937]'>
							Hust<span className='text-[#2563EB]'>link</span>
						</Link>
					</>
				}
			/>
			<LogInEmailForm userEmail={email} />
		</div>
	);
}
