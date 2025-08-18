'use client';

import { FaGithub, FaLinkedin, FaStar } from 'react-icons/fa';
import { Button } from '@/app/shared/components/ui/button';

export default function HustlerSidebar({ hustler }: { hustler: any }) {
	return (
		<>
			<div className='bg-white rounded-2xl shadow-lg p-6 top-6'>
				<h3 className='text-xl font-bold text-gray-900 mb-4'>
					Hire {hustler.name}
				</h3>
				<div className='border border-gray-200 rounded-lg p-4 mb-6'>
					<div className='flex justify-between mb-3'>
						<span className='text-gray-600 text-sm'>Starting Price:</span>
						<span className='text-2xl font-bold text-blue-600'>
							${hustler.startingPrice}
						</span>
					</div>
					<div className='flex justify-between'>
						<span className='text-gray-600 text-sm'>Minimum Payment:</span>
						<span className='text-gray-900 font-semibold'>
							${hustler.minimumPayment}
						</span>
					</div>
				</div>
				<div className='space-y-3'>
					<Button className='w-full bg-blue-600 hover:bg-blue-700'>
						Start a Project
					</Button>
					<Button variant='outline' className='w-full'>
						Send Message
					</Button>
					<Button variant='ghost' className='w-full text-gray-600'>
						Save to Favorites
					</Button>
				</div>
				{hustler.socialLinks && (
					<div className='mt-6 pt-4 border-t border-gray-200'>
						<h4 className='text-sm font-semibold text-gray-600 mb-3'>
							Connect
						</h4>
						<div className='flex space-x-4'>
							{hustler.socialLinks.linkedin && (
								<FaLinkedin
									size={20}
									className='text-blue-600 cursor-pointer'
								/>
							)}
							{hustler.socialLinks.github && (
								<FaGithub size={20} className='text-gray-700 cursor-pointer' />
							)}
						</div>
					</div>
				)}
			</div>

			<div className='bg-white rounded-2xl shadow-lg p-6'>
				<h3 className='text-xl font-bold text-gray-900 mb-4'>Performance</h3>
				<div className='space-y-4'>
					<div>
						<div className='flex justify-between text-sm mb-1'>
							<span className='text-gray-600'>Overall Rating</span>
							<span className='font-semibold'>{hustler.rating}/5</span>
						</div>
						<div className='w-full bg-gray-200 h-2 rounded-full'>
							<div
								className='bg-yellow-500 h-2 rounded-full'
								style={{ width: `${(hustler.rating / 5) * 100}%` }}
							></div>
						</div>
					</div>
					<div>
						<div className='flex justify-between text-sm mb-1'>
							<span className='text-gray-600'>Total Reviews</span>
							<span className='font-semibold'>{hustler.reviewCount}</span>
						</div>
						<div className='w-full bg-gray-200 h-2 rounded-full'>
							<div
								className='bg-blue-500 h-2 rounded-full'
								style={{
									width: `${Math.min((hustler.reviewCount / 50) * 100, 100)}%`,
								}}
							></div>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-green-50 border border-green-200 rounded-2xl p-4'>
				<div className='flex items-start space-x-3'>
					<div className='text-green-600 mt-1'>✔️</div>
					<div>
						<h4 className='text-sm font-semibold text-green-800 mb-1'>
							Verified Profile
						</h4>
						<p className='text-sm text-green-700'>
							This hustler has been verified and has a proven track record.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
