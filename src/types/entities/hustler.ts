// types/entities/hustler.ts

import { PaginatedResponse } from '../pagination';

// ---------- Primitive ----------
export type RatingBreakdown = {
	stars: number; // 1..5
	count: number; // jumlah review pada bintang tsb
};

export type Review = {
	reviewerName: string;
	reviewerImage: string; // URL
	rating: number; // 1..5
	comment: string;
	// (opsional) createdAt?: string; // ISO
};

export type Showcase = {
	title: string;
	role: string;
	period: string;
	technologies: string[];
	description: string;
	images: string[];
};

export type SocialLinks = {
	linkedin?: string;
	github?: string;
	instagram?: string;
	tiktok?: string;
	youtube?: string;
	telegram?: string;
};

// ---------- List item (ringan) ----------
export type HustlerSummary = {
	id: string;
	name: string;
	startingPrice: number;
	minimumPayment: number;
	description: string;
	rating: number;
	reviewCount: number;
	profileImage: string;
	coverImage: string;

	// opsional tapi berguna untuk filter/label
	skills?: string[];
	languages?: string[];
	primaryCategory?: string;
	createdAt?: string; // ISO, untuk sort "new"
};

// ---------- Detail (lengkap) ----------
export type ReviewsPage = PaginatedResponse<Review> & {
	ratingBreakdown: RatingBreakdown[]; // untuk sidebar breakdown
};

export type HustlerDetail = HustlerSummary & {
	bio: string;
	skills: string[]; // pada detail saya sarankan wajib
	languages: string[]; // pada detail saya sarankan wajib
	socialLinks?: SocialLinks;
	showcases: Showcase[];

	// Opsi 1: reviews dipaginasi (direkomendasikan)
	//   reviews?: ReviewsPage;

	// Kalau Anda tetap perlu akses array penuh (tidak disarankan untuk API):
	reviews?: Review[];
};

// ---------- Helper ----------
export function getRatingBreakdown(reviews: Review[]): RatingBreakdown[] {
	const breakdown: RatingBreakdown[] = [
		{ stars: 5, count: 0 },
		{ stars: 4, count: 0 },
		{ stars: 3, count: 0 },
		{ stars: 2, count: 0 },
		{ stars: 1, count: 0 },
	];
	for (const r of reviews) {
		const slot = breakdown.find((b) => b.stars === r.rating);
		if (slot) slot.count += 1;
	}
	return breakdown;
}

export function getRatingStats(reviews: Review[]) {
	const reviewCount = reviews.length;
	const avg =
		reviewCount > 0
			? reviews.reduce((s, r) => s + r.rating, 0) / reviewCount
			: 0;
	return {
		reviewCount,
		rating: parseFloat(avg.toFixed(1)),
		ratingBreakdown: getRatingBreakdown(reviews),
	};
}
