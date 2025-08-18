// app/client/show-hustlers/[hustlerId]/components/ClientReviews.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/app/shared/components/ui/pagination';
import Typography from '@/app/shared/components/ui/Typography';

type Review = {
	reviewerName: string;
	reviewerImage: string;
	rating: number;
	comment: string;
};

export default function ClientReviews({ reviews }: { reviews: Review[] }) {
	const [page, setPage] = useState(1);
	const perPage = 2;
	const totalPages = Math.ceil(reviews.length / perPage);

	const start = (page - 1) * perPage;
	const paginated = reviews.slice(start, start + perPage);

	// untuk mengisi slot kosong agar tinggi tetap = 2 kartu
	const fillers = Math.max(0, perPage - paginated.length);

	return (
		<div className='bg-transparent rounded-xl h-full flex flex-col'>
			{/* Review Cards */}
			<div className='space-y-4 flex-1'>
				{paginated.map((review, i) => (
					<div
						key={i}
						className='bg-white rounded-2xl shadow px-4 flex gap-4 items-center min-h-28'
					>
						<Image
							src={review.reviewerImage}
							alt={review.reviewerName}
							width={48}
							height={48}
							className='rounded-full'
						/>
						<div className='flex flex-col gap-2'>
							<Typography variant='s1' as='p' color='primary'>
								{review.reviewerName}
							</Typography>
							<div className='flex text-secondary'>
								{Array.from({ length: 5 }).map((_, idx) => (
									<FaStar
										key={idx}
										className={
											idx < review.rating ? 'fill-secondary' : 'text-primary'
										}
									/>
								))}
							</div>
							<Typography variant='b2' as='p' color='secondary'>
								{review.comment}
							</Typography>
						</div>
					</div>
				))}

				{/* placeholder tak terlihat untuk menjaga tinggi = 2 kartu */}
				{Array.from({ length: fillers }).map((_, i) => (
					<div
						key={`placeholder-${i}`}
						className='bg-white rounded-lg p-4 gap-4 min-h-28 invisible pointer-events-none'
					/>
				))}
			</div>

			{/* Pagination – selalu di bawah */}
			<div className='pt-4'>
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious
								href='#'
								onClick={(e) => {
									e.preventDefault();
									setPage((prev) => Math.max(prev - 1, 1));
								}}
							/>
						</PaginationItem>

						{Array.from({ length: totalPages }).map((_, i) => (
							<PaginationItem key={i}>
								<PaginationLink
									href='#'
									isActive={page === i + 1}
									onClick={(e) => {
										e.preventDefault();
										setPage(i + 1);
									}}
								>
									{i + 1}
								</PaginationLink>
							</PaginationItem>
						))}

						<PaginationItem>
							<PaginationNext
								href='#'
								onClick={(e) => {
									e.preventDefault();
									setPage((prev) => Math.min(prev + 1, totalPages));
								}}
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
}
