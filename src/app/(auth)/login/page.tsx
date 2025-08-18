'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LogInForm } from '@/app/(auth)/login/components/LogInForm';
import { Navbar } from '@/app/shared/components/widgets/NavbarTransparent';

export default function LoginPage() {
	//  const [step, setStep] = useState<'form' | 'email'>('form');
	//  const [userEmail, setUserEmail] = useState<string>("");
	const router = useRouter();

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
			<LogInForm
				onContinue={(email) => {
					router.push(
						`/login/withUserEmail?email=${encodeURIComponent(email)}`,
					);
				}}
			/>
		</div>
	);
}
