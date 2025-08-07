'use client';

import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/app/shared/components/widgets/NavbarTransparent';
import LogInEmailForm from '../../components/LogInEmailForm';
import LogInForm from '../../components/LogInForm';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export default function LoginPage() {
	//  const [step, setStep] = useState<'form' | 'email'>('form');
	//  const [userEmail, setUserEmail] = useState<string>("");
	const router = useRouter();

	return (
		<div className="flex flex-col w-full min-h-screen bg-[#DFE7F2] bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat antialiased">
			<Navbar />
			<LogInForm
				onContinue={(email) => {
					router.push(
						`/features/general/auth/pages/login/withUserEmail?email=${encodeURIComponent(email)}`,
					);
				}}
			/>
		</div>
	);
}
