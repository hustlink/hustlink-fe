// app/client/show-hustlers/components/HustlerList.tsx
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { HustlerGrid } from '@/app/client/show-hustlers/components/HustlerGrid';
import { Button } from '@/app/shared/components/ui/button';
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/app/shared/components/ui/pagination';
import {
	getRatingStats,
	Hustler,
	Review,
	Showcase,
	SocialLinks,
} from '@/types/entities/hustler';

type SortOption = 'new' | 'rating' | 'price-low' | 'price-high' | 'reviews';

interface BudgetFilter {
	min: number;
	max: number;
}

interface SortDropdownOption {
	value: SortOption;
	label: string;
}

interface BudgetDropdownOption {
	min: number;
	max: number;
	label: string;
}

const fakeHustlers: Hustler[] = [
	{
		id: '1',
		name: 'Abdurahman',
		startingPrice: 100,
		minimumPayment: 80,
		description:
			'I will do app creation build mobile app development, android app ios app development',
		bio: 'Experienced mobile app developer with a passion for creating user-friendly applications.',
		skills: ['Responsive Website', 'Dynamic Website', 'Functional Web App'],
		languages: ['English', 'Arabic'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/hustler-cover-edit.svg',
		reviews: [
			{
				reviewerName: 'Sarah K.',
				reviewerImage: '/image/reviewer1.jpg',
				rating: 5,
				comment: 'Amazing work on our mobile app!',
			},
			{
				reviewerName: 'Tom L.',
				reviewerImage: '/image/reviewer2.jpg',
				rating: 5,
				comment: 'Delivered on time with great quality.',
			},
			{
				reviewerName: 'Emma R.',
				reviewerImage: '/image/reviewer3.jpg',
				rating: 4,
				comment: 'Solid app, minor tweaks needed.',
			},
			{
				reviewerName: 'James P.',
				reviewerImage: '/image/reviewer4.jpg',
				rating: 5,
				comment: 'Highly professional and skilled.',
			},
			{
				reviewerName: 'Lisa M.',
				reviewerImage: '/image/reviewer5.jpg',
				rating: 5,
				comment: 'Exceeded expectations!',
			},
		],
		showcases: [
			{
				title: 'E-Commerce Mobile App',
				role: 'Lead Developer',
				period: 'Jan 2023 - Jun 2023',
				technologies: ['React Native', 'Node.js', 'MongoDB'],
				description:
					'Developed a cross-platform e-commerce app with seamless payment integration.',
				images: ['/image/showcase1.jpg', '/image/showcase2.jpg'],
			},
		],
		socialLinks: {
			linkedin: 'https://linkedin.com/in/abdurahman',
			github: 'https://github.com/abdurahman',
		},
		...getRatingStats([
			{
				reviewerName: 'Sarah K.',
				reviewerImage: '/image/reviewer1.jpg',
				rating: 5,
				comment: 'Amazing work on our mobile app!',
			},
			{
				reviewerName: 'Tom L.',
				reviewerImage: '/image/reviewer2.jpg',
				rating: 5,
				comment: 'Delivered on time with great quality.',
			},
			{
				reviewerName: 'Emma R.',
				reviewerImage: '/image/reviewer3.jpg',
				rating: 4,
				comment: 'Solid app, minor tweaks needed.',
			},
			{
				reviewerName: 'James P.',
				reviewerImage: '/image/reviewer4.jpg',
				rating: 5,
				comment: 'Highly professional and skilled.',
			},
			{
				reviewerName: 'Lisa M.',
				reviewerImage: '/image/reviewer5.jpg',
				rating: 5,
				comment: 'Exceeded expectations!',
			},
		]),
	},
	{
		id: '2',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '3',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '4',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '5',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '6',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '7',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '8',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '9',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '10',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '11',
		name: 'Abdurahman',
		startingPrice: 100,
		minimumPayment: 80,
		description:
			'I will do app creation build mobile app development, android app ios app development',
		bio: 'Experienced mobile app developer with a passion for creating user-friendly applications.',
		skills: ['Responsive Website', 'Dynamic Website', 'Functional Web App'],
		languages: ['English', 'Arabic'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/hustler-cover-edit.svg',
		reviews: [
			{
				reviewerName: 'Sarah K.',
				reviewerImage: '/image/reviewer1.jpg',
				rating: 5,
				comment: 'Amazing work on our mobile app!',
			},
			{
				reviewerName: 'Tom L.',
				reviewerImage: '/image/reviewer2.jpg',
				rating: 5,
				comment: 'Delivered on time with great quality.',
			},
			{
				reviewerName: 'Emma R.',
				reviewerImage: '/image/reviewer3.jpg',
				rating: 4,
				comment: 'Solid app, minor tweaks needed.',
			},
			{
				reviewerName: 'James P.',
				reviewerImage: '/image/reviewer4.jpg',
				rating: 5,
				comment: 'Highly professional and skilled.',
			},
			{
				reviewerName: 'Lisa M.',
				reviewerImage: '/image/reviewer5.jpg',
				rating: 5,
				comment: 'Exceeded expectations!',
			},
		],
		showcases: [
			{
				title: 'E-Commerce Mobile App',
				role: 'Lead Developer',
				period: 'Jan 2023 - Jun 2023',
				technologies: ['React Native', 'Node.js', 'MongoDB'],
				description:
					'Developed a cross-platform e-commerce app with seamless payment integration.',
				images: ['/image/showcase1.jpg', '/image/showcase2.jpg'],
			},
		],
		socialLinks: {
			linkedin: 'https://linkedin.com/in/abdurahman',
			github: 'https://github.com/abdurahman',
		},
		...getRatingStats([
			{
				reviewerName: 'Sarah K.',
				reviewerImage: '/image/reviewer1.jpg',
				rating: 5,
				comment: 'Amazing work on our mobile app!',
			},
			{
				reviewerName: 'Tom L.',
				reviewerImage: '/image/reviewer2.jpg',
				rating: 5,
				comment: 'Delivered on time with great quality.',
			},
			{
				reviewerName: 'Emma R.',
				reviewerImage: '/image/reviewer3.jpg',
				rating: 4,
				comment: 'Solid app, minor tweaks needed.',
			},
			{
				reviewerName: 'James P.',
				reviewerImage: '/image/reviewer4.jpg',
				rating: 5,
				comment: 'Highly professional and skilled.',
			},
			{
				reviewerName: 'Lisa M.',
				reviewerImage: '/image/reviewer5.jpg',
				rating: 5,
				comment: 'Exceeded expectations!',
			},
		]),
	},
	{
		id: '12',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '13',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '14',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '15',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '16',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '17',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '18',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '19',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '20',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '21',
		name: 'Abdurahman',
		startingPrice: 100,
		minimumPayment: 80,
		description:
			'I will do app creation build mobile app development, android app ios app development',
		bio: 'Experienced mobile app developer with a passion for creating user-friendly applications.',
		skills: ['Responsive Website', 'Dynamic Website', 'Functional Web App'],
		languages: ['English', 'Arabic'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/hustler-cover-edit.svg',
		reviews: [
			{
				reviewerName: 'Sarah K.',
				reviewerImage: '/image/reviewer1.jpg',
				rating: 5,
				comment: 'Amazing work on our mobile app!',
			},
			{
				reviewerName: 'Tom L.',
				reviewerImage: '/image/reviewer2.jpg',
				rating: 5,
				comment: 'Delivered on time with great quality.',
			},
			{
				reviewerName: 'Emma R.',
				reviewerImage: '/image/reviewer3.jpg',
				rating: 4,
				comment: 'Solid app, minor tweaks needed.',
			},
			{
				reviewerName: 'James P.',
				reviewerImage: '/image/reviewer4.jpg',
				rating: 5,
				comment: 'Highly professional and skilled.',
			},
			{
				reviewerName: 'Lisa M.',
				reviewerImage: '/image/reviewer5.jpg',
				rating: 5,
				comment: 'Exceeded expectations!',
			},
		],
		showcases: [
			{
				title: 'E-Commerce Mobile App',
				role: 'Lead Developer',
				period: 'Jan 2023 - Jun 2023',
				technologies: ['React Native', 'Node.js', 'MongoDB'],
				description:
					'Developed a cross-platform e-commerce app with seamless payment integration.',
				images: ['/image/showcase1.jpg', '/image/showcase2.jpg'],
			},
		],
		socialLinks: {
			linkedin: 'https://linkedin.com/in/abdurahman',
			github: 'https://github.com/abdurahman',
		},
		...getRatingStats([
			{
				reviewerName: 'Sarah K.',
				reviewerImage: '/image/reviewer1.jpg',
				rating: 5,
				comment: 'Amazing work on our mobile app!',
			},
			{
				reviewerName: 'Tom L.',
				reviewerImage: '/image/reviewer2.jpg',
				rating: 5,
				comment: 'Delivered on time with great quality.',
			},
			{
				reviewerName: 'Emma R.',
				reviewerImage: '/image/reviewer3.jpg',
				rating: 4,
				comment: 'Solid app, minor tweaks needed.',
			},
			{
				reviewerName: 'James P.',
				reviewerImage: '/image/reviewer4.jpg',
				rating: 5,
				comment: 'Highly professional and skilled.',
			},
			{
				reviewerName: 'Lisa M.',
				reviewerImage: '/image/reviewer5.jpg',
				rating: 5,
				comment: 'Exceeded expectations!',
			},
		]),
	},
	{
		id: '22',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '23',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '24',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '25',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '26',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '27',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '28',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '29',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
	{
		id: '30',
		name: 'John Doe',
		startingPrice: 150,
		minimumPayment: 120,
		description: 'Consectetur adipiscing elit',
		bio: 'UI/UX designer with a focus on creating intuitive and visually appealing interfaces.',
		skills: ['UI/UX Design', 'Web Development'],
		languages: ['English'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
		reviews: [
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		],
		showcases: [
			{
				title: 'Corporate Website Redesign',
				role: 'UI/UX Designer',
				period: 'Mar 2022 - Aug 2022',
				technologies: ['Figma', 'React'],
				description:
					'Redesigned a corporate website for improved user engagement.',
				images: ['/image/showcase3.jpg'],
			},
		],
		socialLinks: { linkedin: 'https://linkedin.com/in/johndoe' },
		...getRatingStats([
			{
				reviewerName: 'Anna B.',
				reviewerImage: '/image/reviewer6.jpg',
				rating: 4,
				comment: 'Great design work!',
			},
			{
				reviewerName: 'Mike S.',
				reviewerImage: '/image/reviewer7.jpg',
				rating: 5,
				comment: 'Very creative and responsive.',
			},
			{
				reviewerName: 'Clara T.',
				reviewerImage: '/image/reviewer8.jpg',
				rating: 4,
				comment: 'Good, but needed some revisions.',
			},
		]),
	},
];

export default function HustlersList() {
	// Filtering & sorting
	const [sortBy, setSortBy] = useState<SortOption>('new');
	const [budgetFilter, setBudgetFilter] = useState<BudgetFilter>({
		min: 0,
		max: 1000,
	});
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

	// UI state
	const [showSortDropdown, setShowSortDropdown] = useState<boolean>(false);
	const [showBudgetDropdown, setShowBudgetDropdown] = useState<boolean>(false);
	const [loading, _setLoading] = useState<boolean>(false);

	// Pagination state
	const [page, setPage] = useState<number>(1);
	const perPage = 9; // 3x3 di desktop. Ubah kalau mau.

	// Filter + sort (tetap sama)
	const filteredAndSortedHustlers = useMemo(() => {
		let filtered = [...fakeHustlers];

		if (searchQuery) {
			const q = searchQuery.toLowerCase();
			filtered = filtered.filter(
				(hustler) =>
					hustler.name.toLowerCase().includes(q) ||
					hustler.description.toLowerCase().includes(q) ||
					hustler.skills.some((skill) => skill.toLowerCase().includes(q)),
			);
		}

		filtered = filtered.filter(
			(h) =>
				h.startingPrice >= budgetFilter.min &&
				h.startingPrice <= budgetFilter.max,
		);

		if (selectedSkills.length > 0) {
			filtered = filtered.filter((h) =>
				selectedSkills.some((s) => h.skills.includes(s)),
			);
		}

		switch (sortBy) {
			case 'new':
				return filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
			case 'rating':
				return filtered.sort((a, b) => b.rating - a.rating);
			case 'price-low':
				return filtered.sort((a, b) => a.startingPrice - b.startingPrice);
			case 'price-high':
				return filtered.sort((a, b) => b.startingPrice - a.startingPrice);
			case 'reviews':
				return filtered.sort((a, b) => b.reviewCount - a.reviewCount);
			default:
				return filtered;
		}
	}, [sortBy, budgetFilter, searchQuery, selectedSkills]);

	// target untuk scroll/fokus
	const listTopRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!listTopRef.current) return;
		// pakai scrollIntoView + scroll-mt-* agar offset navbar aman
		listTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
		// fokus (a11y, tidak memicu scroll kedua)
		listTopRef.current.setAttribute('tabindex', '-1');
		listTopRef.current.focus({ preventScroll: true });
	}, [page]);

	// Reset page saat filter/sort berubah (dan ikut scroll via effect di bawah)
	useEffect(() => {
		setPage(1);
	}, [sortBy, budgetFilter, searchQuery, selectedSkills]);

	// BONUS: ketika filter berubah, langsung scroll ke anchor juga
	useEffect(() => {
		if (!listTopRef.current) return;
		listTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
		listTopRef.current.setAttribute('tabindex', '-1');
		listTopRef.current.focus({ preventScroll: true });
	}, [sortBy, budgetFilter, searchQuery, selectedSkills]);

	// Clamp page jika total item berubah (misal dari filter ketat)
	const totalItems = filteredAndSortedHustlers.length;
	const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
	useEffect(() => {
		if (page > totalPages) setPage(totalPages);
	}, [totalPages, page]);

	// Slice data untuk halaman aktif
	const startIdx = (page - 1) * perPage;
	const endIdx = startIdx + perPage;
	const paginatedHustlers = useMemo(
		() => filteredAndSortedHustlers.slice(startIdx, endIdx),
		[filteredAndSortedHustlers, startIdx, endIdx],
	);

	// Handlers
	const handleSortChange = (newSort: SortOption) => {
		setSortBy(newSort);
		setShowSortDropdown(false);
	};

	const handleBudgetChange = (min: number, max: number) => {
		setBudgetFilter({ min, max });
		setShowBudgetDropdown(false);
	};

	const getSortLabel = (): string => {
		switch (sortBy) {
			case 'new':
				return 'Sort by : New Hustler';
			case 'rating':
				return 'Sort by : Highest Rated';
			case 'price-low':
				return 'Sort by : Price (Low to High)';
			case 'price-high':
				return 'Sort by : Price (High to Low)';
			case 'reviews':
				return 'Sort by : Most Reviews';
			default:
				return 'Sort by : New Hustler';
		}
	};

	const getBudgetLabel = () => {
		if (budgetFilter.min === 0 && budgetFilter.max === 1000) {
			return 'Budget : All';
		}
		return `Budget : $${budgetFilter.min} - $${budgetFilter.max}`;
	};

	// hanya tampilkan 3 angka
	const getPageWindow = (current: number, total: number) => {
		if (total <= 3) {
			return {
				pages: Array.from({ length: total }, (_, i) => i + 1),
				showFirst: false,
				showLeftDots: false,
				showRightDots: false,
				showLast: false,
			};
		}

		let pages: number[];
		if (current <= 2) pages = [1, 2, 3];
		else if (current >= total - 1) pages = [total - 2, total - 1, total];
		else pages = [current - 1, current, current + 1];

		// Tampilkan "1" & ellipsis kiri hanya jika ada GAP >= 2 (artinya first > 2)
		const showFirst = pages[0] > 2;
		const showLeftDots = pages[0] > 2;

		// Tampilkan "last" & ellipsis kanan hanya jika ada GAP >= 2 (artinya last < total-1)
		const showLast = pages[2] < total - 1;
		const showRightDots = pages[2] < total - 1;

		return { pages, showFirst, showLeftDots, showRightDots, showLast };
	};

	return (
		<div className='w-full mt-12 bg-transparent'>
			<div className='flex flex-col max-w-10xl mx-auto px-2 sm:px-4 lg:px-0 gap-6'>
				{/* Search Bar */}
				<div className='w-full max-w-md'>
					<input
						type='text'
						placeholder='Search hustlers, skills...'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
					/>
				</div>

				<div className='flex justify-between items-center'>
					{/* Filter Buttons */}
					<div className='flex flex-wrap gap-8 items-center'>
						{/* Sort Dropdown */}
						<div className='relative'>
							<Button
								variant={'ghost'}
								icon={
									<Image
										src='/icon/arrow-down.svg'
										alt='Sort By'
										width={14}
										height={12}
										className='!w-4 h-auto mt-1'
									/>
								}
								iconPosition='right'
								className='h-[48px] z-50 bg-white hover:bg-gray-50 rounded-[12px] shadow-muted-foreground text-md text-[#1F2937] font-normal hover:text-[#1F2937] tracking-[0.08em] cursor-pointer'
								onClick={() => {
									setShowSortDropdown(!showSortDropdown);
									setShowBudgetDropdown(false);
								}}
							>
								{getSortLabel()}
							</Button>

							{showSortDropdown && (
								<div className='absolute z-50 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg'>
									<div className='py-2'>
										{[
											{ value: 'new', label: 'New Hustler' },
											{ value: 'rating', label: 'Highest Rated' },
											{ value: 'price-low', label: 'Price: Low to High' },
											{ value: 'price-high', label: 'Price: High to Low' },
											{ value: 'reviews', label: 'Most Reviews' },
										].map((option) => (
											<button
												key={option.value}
												onClick={() =>
													handleSortChange(option.value as SortOption)
												}
												className='w-full text-left px-4 py-2 hover:bg-gray-50 text-sm'
											>
												{option.label}
											</button>
										))}
									</div>
								</div>
							)}
						</div>

						{/* Budget Dropdown */}
						<div className='relative'>
							<Button
								variant={'ghost'}
								icon={
									<Image
										src='/icon/arrow-down.svg'
										alt='Budget'
										width={14}
										height={12}
										className='!w-4 h-auto mt-1'
									/>
								}
								iconPosition='right'
								className='h-[48px] z-50 bg-white hover:bg-gray-50 rounded-[12px] shadow-muted-foreground text-md text-[#1F2937] font-normal hover:text-[#1F2937] tracking-[0.08em] cursor-pointer'
								onClick={() => {
									setShowBudgetDropdown(!showBudgetDropdown);
									setShowSortDropdown(false);
								}}
							>
								{getBudgetLabel()}
							</Button>

							{showBudgetDropdown && (
								<div className='absolute z-50 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg'>
									<div className='py-2'>
										{[
											{ min: 0, max: 1000, label: 'All Budgets' },
											{ min: 0, max: 100, label: 'Under $100' },
											{ min: 100, max: 150, label: '$100 - $150' },
											{ min: 150, max: 200, label: '$150 - $200' },
											{ min: 200, max: 1000, label: 'Above $200' },
										].map((option) => (
											<button
												key={`${option.min}-${option.max}`}
												onClick={() =>
													handleBudgetChange(option.min, option.max)
												}
												className='w-full text-left px-4 py-2 hover:bg-gray-50 text-sm'
											>
												{option.label}
											</button>
										))}
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Results count + range */}
					<div className='pr-4 text-gray-600 text-lg font-medium'>
						{totalItems} hustlers found
						{totalItems > 0 && (
							<span className='ml-2 text-sm text-gray-500'>
								(showing {startIdx + 1}-{Math.min(endIdx, totalItems)})
							</span>
						)}
					</div>
				</div>

				{/* Active filters display */}
				{(searchQuery ||
					budgetFilter.min > 0 ||
					budgetFilter.max < 1000 ||
					selectedSkills.length > 0) && (
					<div className='flex flex-wrap gap-2 items-center'>
						<span className='text-sm text-gray-600'>Active filters:</span>

						{searchQuery && (
							<span className='px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs'>
								Search: {searchQuery}
								<button
									onClick={() => setSearchQuery('')}
									className='ml-1 text-blue-600 hover:text-blue-800'
								>
									×
								</button>
							</span>
						)}

						{(budgetFilter.min > 0 || budgetFilter.max < 1000) && (
							<span className='px-2 py-1 bg-green-100 text-green-800 rounded text-xs'>
								Budget: ${budgetFilter.min} - ${budgetFilter.max}
								<button
									onClick={() => setBudgetFilter({ min: 0, max: 1000 })}
									className='ml-1 text-green-600 hover:text-green-800'
								>
									×
								</button>
							</span>
						)}

						<button
							onClick={() => {
								setSearchQuery('');
								setBudgetFilter({ min: 0, max: 1000 });
								setSelectedSkills([]);
							}}
							className='text-xs text-gray-500 hover:text-gray-700'
						>
							Clear all
						</button>
					</div>
				)}

				{/* Loading state */}
				{loading && (
					<div className='flex justify-center py-8'>
						<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500'></div>
					</div>
				)}

				{/* 🔹 anchor di atas grid — tambahkan scroll-mt untuk offset navbar */}
				<div
					ref={listTopRef}
					aria-label='Hustler results'
					className='outline-none scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36'
				/>

				{/* Hustler Grid (tanpa overflow scroll; pagination yang atur jumlah item) */}
				<div className='mb-6'>
					<HustlerGrid data={paginatedHustlers} />
				</div>

				{/* Pagination controls */}
				{totalPages >= 1 && (
					<div className='flex justify-center pb-8'>
						<Pagination>
							<PaginationContent>
								<PaginationItem>
									<PaginationPrevious
										href='#'
										onClick={(e) => {
											e.preventDefault();
											setPage((p) => Math.max(1, p - 1));
										}}
										className='disabled:invisible disabled:pointer-events-none'
									/>
								</PaginationItem>

								{/* {Array.from({ length: totalPages }).map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href="#"
                      isActive={page === i + 1}
                      onClick={(e) => {
                        e.preventDefault();
                        setPage(i + 1);
                      }}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))} */}

								{/* Window + Ellipsis */}
								{(() => {
									const {
										pages,
										showFirst,
										showLeftDots,
										showRightDots,
										showLast,
									} = getPageWindow(page, totalPages);
									return (
										<>
											{showFirst && (
												<PaginationItem>
													<PaginationLink
														href='#'
														onClick={(e) => {
															e.preventDefault();
															setPage(1);
														}}
														isActive={page === 1}
													>
														1
													</PaginationLink>
												</PaginationItem>
											)}

											{showLeftDots && (
												<PaginationItem>
													<PaginationEllipsis />
												</PaginationItem>
											)}

											{pages.map((p) => (
												<PaginationItem key={p}>
													<PaginationLink
														href='#'
														isActive={page === p}
														onClick={(e) => {
															e.preventDefault();
															setPage(p);
														}}
													>
														{p}
													</PaginationLink>
												</PaginationItem>
											))}

											{showRightDots && (
												<PaginationItem>
													<PaginationEllipsis />
												</PaginationItem>
											)}

											{showLast && (
												<PaginationItem>
													<PaginationLink
														href='#'
														onClick={(e) => {
															e.preventDefault();
															setPage(totalPages);
														}}
														isActive={page === totalPages}
													>
														{totalPages}
													</PaginationLink>
												</PaginationItem>
											)}
										</>
									);
								})()}

								<PaginationItem>
									<PaginationNext
										href='#'
										onClick={(e) => {
											e.preventDefault();
											setPage((p) => Math.min(totalPages, p + 1));
										}}
										className='disabled:invisible disabled:pointer-events-none'
									/>
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</div>
				)}
			</div>
		</div>
	);
}

export { HustlersList };
