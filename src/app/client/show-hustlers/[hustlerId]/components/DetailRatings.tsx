// app/client/show-hustlers/[hustlerId]/components/DetailRatings.tsx
'use client';

import { Star } from 'lucide-react';

interface DetailRatingsProps {
	rating: number;
	reviewCount: number;
	ratingsBreakdown: {
		5: number;
		4: number;
		3: number;
		2: number;
		1: number;
	};
}

export default function DetailRatings({
	rating,
	reviewCount,
	ratingsBreakdown,
}: DetailRatingsProps) {
	return (
		<div className='h-full min-h-[240px] flex flex-col justify-start gap-10 rounded-lg bg-transparent p-4'>
			{/* Average rating */}
			<div className='flex items-center gap-2'>
				{Array.from({ length: 5 }).map((_, i) => (
					<Star
						key={i}
						className={`w-6 h-6 ${i < Math.round(rating) ? 'text-secondary fill-secondary' : 'text-gray-300'}`}
					/>
				))}
				<span className='text-2xl font-semibold'>{rating.toFixed(1)}</span>
				<span className='text-gray-500 text-lg'>({reviewCount} reviews)</span>
			</div>

			{/* Breakdown */}
			<div className='space-y-2'>
				{Object.entries(ratingsBreakdown)
					.sort(([a], [b]) => Number(b) - Number(a))
					.map(([stars, count]) => {
						const percentage =
							reviewCount > 0 ? (count / reviewCount) * 100 : 0;
						return (
							<div key={stars} className='flex items-center gap-2'>
								<span className='w-16 text-base font-medium text-gray-700'>
									{stars} Stars
								</span>
								<div className='flex-1 relative h-3 bg-gray-300 rounded-full overflow-hidden'>
									<div
										className='absolute top-0 left-0 h-3 bg-blue-500 rounded-full'
										style={{ width: `${percentage}%` }}
									/>
								</div>
								<span className='w-8 text-base font-medium text-gray-700 text-right'>
									{count}
								</span>
							</div>
						);
					})}
			</div>
		</div>
	);
}
