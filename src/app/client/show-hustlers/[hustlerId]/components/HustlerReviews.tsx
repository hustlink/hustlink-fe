'use client';

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

export default function HustlerReviews({
	reviews,
	rating,
	reviewCount,
}: {
	reviews: any[];
	rating: number;
	reviewCount: number;
}) {
	if (!reviews || reviews.length === 0) return null;

	return (
		<div className='bg-white rounded-2xl shadow-lg p-6'>
			<div className='flex items-center justify-between mb-6'>
				<h2 className='text-2xl font-bold text-gray-900'>Client Reviews</h2>
				<div className='text-sm text-gray-500'>{reviewCount} total reviews</div>
			</div>
			<div className='bg-gray-50 rounded-lg p-4 mb-6'>
				<div className='flex items-center justify-center mb-2'>
					<span className='text-3xl font-bold text-gray-900 mr-2'>
						{rating}
					</span>
					<div className='flex items-center text-yellow-500'>
						{[...Array(5)].map((_, i) => (
							<FaStar
								key={i}
								className={
									i < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'
								}
								size={20}
							/>
						))}
					</div>
				</div>
				<p className='text-center text-gray-600'>
					Based on {reviewCount} reviews
				</p>
			</div>
			<div className='space-y-4'>
				{reviews.map((r, i) => (
					<div
						key={i}
						className='border-b border-gray-200 pb-4 last:border-b-0'
					>
						<div className='flex items-start space-x-3'>
							<Image
								src={r.reviewerImage}
								alt={r.reviewerName}
								width={48}
								height={48}
								className='rounded-full'
							/>
							<div className='flex-1'>
								<div className='flex items-center justify-between mb-1'>
									<h4 className='font-semibold text-gray-900'>
										{r.reviewerName}
									</h4>
									<div className='flex items-center text-yellow-500'>
										{[...Array(5)].map((_, j) => (
											<FaStar
												key={j}
												size={14}
												className={
													j < r.rating ? 'text-yellow-500' : 'text-gray-300'
												}
											/>
										))}
									</div>
								</div>
								<p className='text-gray-700'>{r.comment}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
