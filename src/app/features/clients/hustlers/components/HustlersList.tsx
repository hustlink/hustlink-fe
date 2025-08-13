import Image from 'next/image';
import { useMemo, useState } from 'react';
import { Button } from '@/app/shared/components/ui/button';
import { Hustler } from '@/types/hustler';
import HustlerGrid from './HustlerGrid';

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
		rating: 5,
		reviewCount: 121,
		startingPrice: 100,
		description: 'Lorem ipsum dolor sit amet',
		skills: ['Responsive Website', 'Dynamic Website', 'Functional Web App'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/hustler-cover-edit.svg',
	},
	{
		id: '2',
		name: 'John Doe',
		rating: 4.5,
		reviewCount: 98,
		startingPrice: 150,
		description: 'Consectetur adipiscing elit',
		skills: ['UI/UX Design', 'Web Development'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
	},
	{
		id: '3',
		name: 'Jane Smith',
		rating: 4.8,
		reviewCount: 75,
		startingPrice: 120,
		description: 'Sed do eiusmod tempor incididunt',
		skills: ['Graphic Design', 'Branding'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/hustler-cover-edit.svg',
	},
	{
		id: '4',
		name: 'Alice Johnson',
		rating: 4.9,
		reviewCount: 50,
		startingPrice: 130,
		description: 'Ut enim ad minim veniam',
		skills: ['SEO', 'Content Writing'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/hustler-cover-edit.svg',
	},
	{
		id: '5',
		name: 'Bob Brown',
		rating: 4.7,
		reviewCount: 60,
		startingPrice: 140,
		description:
			'Duis aute irure dolor in reprehenderit in voluptate velit des des des des des des des',
		skills: ['SEO', 'Content Writing'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/hustler-cover-edit.svg',
	},
	{
		id: '6',
		name: 'Emma Wilson',
		rating: 4.6,
		reviewCount: 88,
		startingPrice: 110,
		description: 'Excepteur sint occaecat cupidatat non proident',
		skills: ['Mobile App Development', 'API Integration'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
	},
	{
		id: '7',
		name: 'Michael Chen',
		rating: 4.8,
		reviewCount: 45,
		startingPrice: 160,
		description: 'Sunt in culpa qui officia deserunt mollit',
		skills: ['Backend Development', 'Database Management'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/hustler-cover-edit.svg',
	},
	{
		id: '8',
		name: 'Sophie Davis',
		rating: 4.9,
		reviewCount: 102,
		startingPrice: 95,
		description: 'Nemo enim ipsam voluptatem quia voluptas',
		skills: ['Social Media Marketing', 'Content Creation'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
	},
	{
		id: '9',
		name: 'David Lee',
		rating: 4.4,
		reviewCount: 67,
		startingPrice: 175,
		description: 'At vero eos et accusamus et iusto odio',
		skills: ['Frontend Development', 'React Expertise'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/hustler-cover-edit.svg',
	},
	{
		id: '10',
		name: 'Laura Martinez',
		rating: 4.7,
		reviewCount: 80,
		startingPrice: 125,
		description: 'Et harum quidem rerum facilis est et expedita',
		skills: ['Illustration', 'Logo Design'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
	},
	{
		id: '11',
		name: 'Chris Taylor',
		rating: 4.5,
		reviewCount: 55,
		startingPrice: 145,
		description: 'Nam libero tempore cum soluta nobis est',
		skills: ['WordPress Development', 'E-commerce Solutions'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/hustler-cover-edit.svg',
	},
	{
		id: '12',
		name: 'Olivia Brown',
		rating: 4.9,
		reviewCount: 130,
		startingPrice: 90,
		description: 'Temporibus autem quibusdam et aut officiis',
		skills: ['Copywriting', 'Blog Writing'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
	},
	{
		id: '13',
		name: 'James Wilson',
		rating: 4.6,
		reviewCount: 70,
		startingPrice: 180,
		description: 'Itaque earum rerum hic tenetur a sapiente',
		skills: ['DevOps', 'Cloud Infrastructure'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/hustler-cover-edit.svg',
	},
	{
		id: '14',
		name: 'Emily Clark',
		rating: 4.8,
		reviewCount: 92,
		startingPrice: 115,
		description: 'Neque porro quisquam est qui dolorem ipsum',
		skills: ['Motion Graphics', 'Video Editing'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/cover-image-example.jpg',
	},
	{
		id: '15',
		name: 'Daniel Kim',
		rating: 4.7,
		reviewCount: 65,
		startingPrice: 135,
		description: 'Quia consequuntur magni dolores eos qui',
		skills: ['Data Analysis', 'Python Scripting'],
		profileImage: '/image/client/hustler-profile.svg',
		coverImage: '/image/client/hustler-cover-edit.svg',
	},
];

export default function HustlersList() {
	// State untuk filtering dan sorting
	const [sortBy, setSortBy] = useState<SortOption>('new');
	const [budgetFilter, setBudgetFilter] = useState<BudgetFilter>({
		min: 0,
		max: 1000,
	});
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

	// State untuk UI
	const [showSortDropdown, setShowSortDropdown] = useState<boolean>(false);
	const [showBudgetDropdown, setShowBudgetDropdown] = useState<boolean>(false);
	const [loading, _setLoading] = useState<boolean>(false);

	// Computed filtered dan sorted data menggunakan useMemo untuk performance
	const filteredAndSortedHustlers = useMemo(() => {
		let filtered = [...fakeHustlers];

		// Filter by search query
		if (searchQuery) {
			filtered = filtered.filter(
				(hustler) =>
					hustler.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					hustler.description
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) ||
					hustler.skills.some((skill) =>
						skill.toLowerCase().includes(searchQuery.toLowerCase()),
					),
			);
		}

		// Filter by budget
		filtered = filtered.filter(
			(hustler) =>
				hustler.startingPrice >= budgetFilter.min &&
				hustler.startingPrice <= budgetFilter.max,
		);

		// Filter by skills
		if (selectedSkills.length > 0) {
			filtered = filtered.filter((hustler) =>
				selectedSkills.some((skill) => hustler.skills.includes(skill)),
			);
		}

		// Sort
		switch (sortBy) {
			case 'new':
				// Assume newer hustlers have higher IDs
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
	}, [fakeHustlers, sortBy, budgetFilter, searchQuery, selectedSkills]);

	// Handler functions
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

	return (
		<div className='w-full mt-12 bg-transparent min-h-screen'>
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
					{/* Results count */}
					<div className='pr-4 text-gray-600 text-lg font-medium'>
						{filteredAndSortedHustlers.length} hustlers found
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

				{/* Hustler Grid */}
				<div className='h-auto md:max-h-[964px] lg:max-h-[970px] xl:max-h-[980px] mb-10 overflow-y-auto rounded-2xl bg-transparent pr-2 pt-2 pb-8 custom-scrollbar'>
					<HustlerGrid data={filteredAndSortedHustlers} />
				</div>
			</div>
		</div>
	);
}
