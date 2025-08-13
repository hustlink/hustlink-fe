import Image from 'next/image';
import AddProjectSection from '../features/clients/landing/components/AddProjectSection';
import { HeroLanding } from '../features/clients/landing/components/HeroLanding';
import NavbarLanding from '../features/clients/landing/components/NavbarLandingPage';
import Footer from '../shared/components/widgets/Footer';
import AddWorkFieldPage from '../features/freelancer/profile/pages/AddWorkPopUp';
import UploadCVPage from '../features/freelancer/landing/pages/UploadCVPage';

export default function Home() {
	return (
		<>
			{/* <NavbarLanding />
			<HeroLanding />
			<AddProjectSection />
			<Footer />
			<AddWorkFieldPage /> */}
			<UploadCVPage />
		</>
	);
}
