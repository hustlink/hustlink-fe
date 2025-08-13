import Navbar from '../features/clients/hustlers/components/NavbarHustlers';
import AddProjectSection from '../features/clients/landing/components/AddProjectSection';
import { HeroLanding } from '../features/clients/landing/components/HeroLanding';
import Footer from '../shared/components/widgets/Footer';

export default function Home() {
	return (
		<>
			{/* <NavbarLanding /> */}
			<Navbar />
			<HeroLanding />
			<AddProjectSection />
			<Footer />
			<AddWorkFieldPage /> */}
			<UploadCVPage />
		</>
	);
}
