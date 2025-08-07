// components/HustlerGrid.tsx

import { Hustler } from '@/types/hustler';
import HustlerCard from './HustlerCard';

type Props = {
	data: Hustler[];
};

export default function HustlerGrid({ data }: Props) {
	return (
		<div className='grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 gap-y-4 sm:gap-y-5 md:gap-y-6 lg:gap-y-6 sm:gap-x-4 md:gap-x-6 lg:gap-x-14'>
			{data.map((hustler) => (
				<HustlerCard key={hustler.id} hustler={hustler} />
			))}
		</div>
	);
}
