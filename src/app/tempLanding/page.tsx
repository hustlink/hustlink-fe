import { AdvantageSection } from '@/app/tempLanding/components/AdvantageSection';
import { BenefitSection } from '@/app/tempLanding/components/BenefitSection';
import { HeroSection } from '@/app/tempLanding/components/HeroSection';
import { NavbarLanding } from '@/app/tempLanding/components/NavbarLanding';
import { ThreeCardSection } from '@/app/tempLanding/components/ThreeCardSection';
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
