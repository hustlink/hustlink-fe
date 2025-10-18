// app/(auth)/login/page.tsx - NextAuth Version
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { EssentialCookieNotice } from '@/app/shared/components/EssentialCookieNotice';
import Seo from '@/app/shared/components/Seo';
import { Navbar } from '@/app/shared/components/widgets/Navbar';
import LogInForm from './components/LogInForm';

export default async function LoginPage() {
	// Server-side check: redirect authenticated users
	const session = await getServerSession(authOptions);

	if (session) {
		const userType = session.user.userType;
		const isCompleted = session.user.isCompleted;

		// Redirect berdasarkan userType dan completion status
		if (userType === 'client') {
			redirect(isCompleted ? '/client' : '/client/complete-profile');
		} else {
			redirect(isCompleted ? '/freelancer' : '/freelancer/complete-profile');
		}
	}

	return (
		<div className="flex flex-col w-full min-h-screen bg-[#DFE7F2] bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat antialiased">
			<Seo templateTitle='Login' />
			<Navbar
				transparent={true}
				leftContent={
					<>
						<Link href='/' className='text-2xl text-[#1F2937]'>
							Hust<span className='text-[#2563EB]'>link</span>
						</Link>
					</>
				}
			/>
			<div className='flex flex-1 justify-center'>
				<LogInForm />
			</div>

			{/* selalu di bawah */}
			<EssentialCookieNotice />
		</div>
	);
}
