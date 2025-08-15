import { AdvantageSection } from '@/app/freelancer/components/AdvantageSection';
import { BenefitSection } from '@/app/freelancer/components/BenefitSection';
import { HeroSection } from '@/app/freelancer/components/HeroSection';
import { NavbarLanding } from '@/app/freelancer/components/NavbarLanding';
import { ThreeCardSection } from '@/app/freelancer/components/ThreeCardSection';
import Footer from '../shared/components/widgets/Footer';

export default function Home() {
	return (
		<>
			<NavbarLanding />
			<HeroSection />
			<ThreeCardSection />
			<BenefitSection />
			<AdvantageSection />
			<Footer />
		</>
	);
}
