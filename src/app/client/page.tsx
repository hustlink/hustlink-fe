import { AddProjectSection } from '@/app/client/components/AddProjectSection';
import { HeroSection } from '@/app/client/components/HeroSection';
import { NavbarLanding } from '@/app/client/components/NavbarLanding';
import Footer from '../shared/components/widgets/Footer';

export default function Home() {
	return (
		<>
			<NavbarLanding />
			<HeroSection />
			<AddProjectSection />
			<Footer />
		</>
	);
}
