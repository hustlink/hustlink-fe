import NavbarLanding from '../client/components/NavbarLanding';
import AddProjectSection from '../client/components/AddProjectSection';
import { HeroSection } from '../client/components/HeroSection';
import {Navbar} from '../shared/components/widgets/Navbar';
// import UploadCVPage from '../features/freelancer/landing/pages/UploadCVPage';
// import AddWorkFieldPage from '../features/freelancer/profile/pages/AddWorkPopUp';
import Footer from '../shared/components/widgets/Footer';
import CategoryList from '../features/clients/landing/components/CategoryList';

export default function Home() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<CategoryList />
			<AddProjectSection />
			<Footer />
			{/* <AddWorkFieldPage />  */}
			{/* <UploadCVPage /> */}
		</>
	);
}
