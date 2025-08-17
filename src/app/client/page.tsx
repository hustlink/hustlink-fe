<<<<<<< HEAD
import Navbar from '../features/clients/hustlers/components/NavbarHustlers';
import AddProjectSection from '../features/clients/landing/components/AddProjectSection';
import { HeroLanding } from '../features/clients/landing/components/HeroLanding';
import UploadCVPage from '../features/freelancer/landing/pages/UploadCVPage';
import AddWorkFieldPage from '../features/freelancer/profile/pages/AddWorkPopUp';
=======
import { AddProjectSection } from '@/app/client/components/AddProjectSection';
import { HeroSection } from '@/app/client/components/HeroSection';
import { NavbarLanding } from '@/app/client/components/NavbarLanding';
>>>>>>> ffbfc4e7d4cf8670160df1a1860f067f1bc47c33
import Footer from '../shared/components/widgets/Footer';
import CategoryList from '../features/clients/landing/components/CategoryList';

export default function Home() {
	return (
		<>
<<<<<<< HEAD
			<Navbar />
			<HeroLanding />
			<CategoryList />
			<AddProjectSection />
			<Footer />
			{/* <AddWorkFieldPage />  */}
			{/* <UploadCVPage /> */}
=======
			<NavbarLanding />
			<HeroSection />
			<AddProjectSection />
			<Footer />
>>>>>>> ffbfc4e7d4cf8670160df1a1860f067f1bc47c33
		</>
	);
}
