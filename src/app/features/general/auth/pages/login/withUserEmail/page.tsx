'use client';

import { Inter } from 'next/font/google';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/app/shared/components/widgets/NavbarTransparent';

import LogInEmailForm from '../../../components/LogInEmailForm';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export default function LoginWithUserEmailPage() {
	const searchParams = useSearchParams();
	const email = searchParams.get('email') ?? '';

	return (
		<div className="flex flex-col w-full min-h-screen bg-[#DFE7F2] bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat antialiased">
			<Navbar />
			<LogInEmailForm userEmail={email} />
		</div>
	);
}
