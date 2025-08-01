import { ButtonPlayground } from '@/app/shared/components/playground/button-pg';
import { Button } from '@/app/shared/components/ui/button';
import HeroLanding from '../features/clients/landing/components/HeroLanding';
import Navbar from '../features/clients/landing/components/NavbarLandingPage';

export default function Playground() {
	return (
		<>
			<Navbar />
			<div className='bg-[#EEF2FA]'>
				<HeroLanding />
			</div>
		</>
	);
}
