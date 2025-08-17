import Navbar from '../features/clients/hustlers/components/NavbarHustlers';
import AddProjectSection from '../features/clients/landing/components/AddProjectSection';
import { HeroLanding } from '../features/clients/landing/components/HeroLanding';
import UploadCVPage from '../features/freelancer/landing/pages/UploadCVPage';
import AddWorkFieldPage from '../features/freelancer/profile/pages/AddWorkPopUp';
import Footer from '../shared/components/widgets/Footer';
import CategoryList from '../features/clients/landing/components/CategoryList';

export default function Home() {
	return (
		<>
			<Navbar />
			<HeroLanding />
			<CategoryList />
			<AddProjectSection />
			<Footer />
			{/* <AddWorkFieldPage />  */}
			{/* <UploadCVPage /> */}
		</>
	);
}
