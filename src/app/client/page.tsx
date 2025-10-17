// app/client/page.tsx

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { AddProjectSection } from '@/app/client/components/AddProjectSection';
import { HeroSection } from '@/app/client/components/HeroSection';
import { NavbarLanding } from '@/app/client/components/NavbarLanding';
import Footer from '../shared/components/widgets/Footer';
import CategoryList from '../features/clients/landing/components/CategoryList';

export default async function ClientPage() {
	const session = await getServerSession(authOptions);

	// Server-side protection
	if (!session || session.user?.userType !== 'client') {
		redirect('/login');
	}

	return (
		<div className='max-w-3xl mx-auto py-10 px-6'>
			<NavbarLanding />
			<h1 className='text-2xl font-semibold'>Welcome, {session.user.name}!</h1>
			<p className='mt-2'>User Type: {session.user.userType}</p>
			<p className='mt-1'>
				Profile Status: {session.user.isCompleted ? 'Complete' : 'Incomplete'}
			</p>
			<HeroSection />
			<CategoryList />
			<AddProjectSection />
			<Footer />
		</div>
	);
}
