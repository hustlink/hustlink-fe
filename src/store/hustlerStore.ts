// store/hustlerStore.ts
import { create } from 'zustand';
import { getRatingStats, Hustler } from '@/types/entities/hustler';

interface FilterOptions {
	skills?: string[];
	minRating?: number;
	maxPrice?: number;
	languages?: string[];
	searchQuery?: string;
}

interface PaginationState {
	page: number;
	limit: number;
	total: number;
	hasMore: boolean;
}

interface HustlerStore {
	// State
	hustlers: Hustler[];
	selectedHustler: Hustler | null;
	filteredHustlers: Hustler[];
	isLoading: boolean;
	isLoadingDetail: boolean;
	error: string | null;
	filters: FilterOptions;
	pagination: PaginationState;

	// Search & Filter State
	searchQuery: string;
	availableSkills: string[];
	availableLanguages: string[];

	// Actions - Fetching
	fetchHustlers: () => Promise<void>;
	fetchHustlerById: (id: string) => Promise<void>;
	loadMoreHustlers: () => Promise<void>;
	refreshHustlers: () => Promise<void>;

	// Actions - Selection & Navigation
	setSelectedHustler: (hustler: Hustler | null) => void;
	selectHustlerById: (id: string) => void;

	// Actions - Search & Filter
	setSearchQuery: (query: string) => void;
	setFilters: (filters: Partial<FilterOptions>) => void;
	clearFilters: () => void;
	applyFilters: () => void;

	// Actions - Utilities
	clearError: () => void;
	reset: () => void;

	// Getters (computed values)
	getHustlerById: (id: string) => Hustler | undefined;
	getTopRatedHustlers: (limit?: number) => Hustler[];
	getHustlersBySkill: (skill: string) => Hustler[];
	getFeaturedHustlers: () => Hustler[];
}

const initialPagination: PaginationState = {
	page: 1,
	limit: 12,
	total: 0,
	hasMore: true,
};

const initialFilters: FilterOptions = {
	skills: [],
	minRating: 0,
	maxPrice: undefined,
	languages: [],
	searchQuery: '',
};

export const useHustlerStore = create<HustlerStore>((set, get) => ({
	// Initial State
	hustlers: [],
	selectedHustler: null,
	filteredHustlers: [],
	isLoading: false,
	isLoadingDetail: false,
	error: null,
	filters: initialFilters,
	pagination: initialPagination,
	searchQuery: '',
	availableSkills: [],
	availableLanguages: [],

	// Fetch all hustlers
	fetchHustlers: async () => {
		set({ isLoading: true, error: null });

		try {
			const response = await fetch('/api/hustlers', {
				credentials: 'include',
			});

			if (!response.ok) {
				throw new Error(`Failed to fetch hustlers: ${response.statusText}`);
			}

			const data = await response.json();

			// Extract available skills and languages for filters
			const allSkills = new Set<string>();
			const allLanguages = new Set<string>();

			data.hustlers.forEach((hustler: Hustler) => {
				hustler.skills.forEach((skill) => allSkills.add(skill));
				hustler.languages.forEach((lang) => allLanguages.add(lang));
			});

			set({
				hustlers: data.hustlers || [],
				filteredHustlers: data.hustlers || [],
				availableSkills: Array.from(allSkills).sort(),
				availableLanguages: Array.from(allLanguages).sort(),
				pagination: {
					...get().pagination,
					total: data.total || data.hustlers?.length || 0,
					hasMore: data.hasMore || false,
				},
				isLoading: false,
			});
		} catch (error) {
			set({
				error:
					error instanceof Error ? error.message : 'Failed to fetch hustlers',
				isLoading: false,
			});
		}
	},

	// Fetch specific hustler by ID
	fetchHustlerById: async (id: string) => {
		set({ isLoadingDetail: true, error: null });

		try {
			const response = await fetch(`/api/hustlers/${id}`, {
				credentials: 'include',
			});

			if (!response.ok) {
				throw new Error(`Failed to fetch hustler: ${response.statusText}`);
			}

			const data = await response.json();

			// Calculate rating stats
			const ratingStats = getRatingStats(data.hustler.reviews);
			const hustlerWithStats = {
				...data.hustler,
				...ratingStats,
			};

			set({
				selectedHustler: hustlerWithStats,
				isLoadingDetail: false,
			});
		} catch (error) {
			set({
				error:
					error instanceof Error
						? error.message
						: 'Failed to fetch hustler details',
				isLoadingDetail: false,
			});
		}
	},

	// Load more hustlers (pagination)
	loadMoreHustlers: async () => {
		const { pagination, isLoading } = get();

		if (isLoading || !pagination.hasMore) return;

		set({ isLoading: true });

		try {
			const response = await fetch(
				`/api/hustlers?page=${pagination.page + 1}&limit=${pagination.limit}`,
				{
					credentials: 'include',
				},
			);

			if (!response.ok) {
				throw new Error('Failed to load more hustlers');
			}

			const data = await response.json();

			set((state) => ({
				hustlers: [...state.hustlers, ...data.hustlers],
				filteredHustlers: [...state.filteredHustlers, ...data.hustlers],
				pagination: {
					...state.pagination,
					page: pagination.page + 1,
					hasMore: data.hasMore,
				},
				isLoading: false,
			}));
		} catch (error) {
			set({
				error:
					error instanceof Error
						? error.message
						: 'Failed to load more hustlers',
				isLoading: false,
			});
		}
	},

	// Refresh hustlers list
	refreshHustlers: async () => {
		set({
			pagination: initialPagination,
			hustlers: [],
			filteredHustlers: [],
		});
		await get().fetchHustlers();
	},

	// Set selected hustler
	setSelectedHustler: (hustler) => {
		set({ selectedHustler: hustler });
	},

	// Select hustler by ID from existing list
	selectHustlerById: (id) => {
		const hustler = get().hustlers.find((h) => h.id === id);
		if (hustler) {
			set({ selectedHustler: hustler });
		} else {
			// If not in list, fetch from API
			get().fetchHustlerById(id);
		}
	},

	// Set search query
	setSearchQuery: (query) => {
		set({ searchQuery: query });
		get().applyFilters();
	},

	// Set filters
	setFilters: (newFilters) => {
		set((state) => ({
			filters: { ...state.filters, ...newFilters },
		}));
		get().applyFilters();
	},

	// Clear all filters
	clearFilters: () => {
		set({
			filters: initialFilters,
			searchQuery: '',
		});
		get().applyFilters();
	},

	// Apply current filters to hustlers list
	applyFilters: () => {
		const { hustlers, filters, searchQuery } = get();

		let filtered = [...hustlers];

		// Text search
		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase();
			filtered = filtered.filter(
				(hustler) =>
					hustler.name.toLowerCase().includes(query) ||
					hustler.description.toLowerCase().includes(query) ||
					hustler.bio.toLowerCase().includes(query) ||
					hustler.skills.some((skill) => skill.toLowerCase().includes(query)),
			);
		}

		// Skill filter
		if (filters.skills && filters.skills.length > 0) {
			filtered = filtered.filter((hustler) =>
				filters.skills!.some((skill) => hustler.skills.includes(skill)),
			);
		}

		// Rating filter
		if (filters.minRating && filters.minRating > 0) {
			filtered = filtered.filter(
				(hustler) => hustler.rating >= filters.minRating!,
			);
		}

		// Price filter
		if (filters.maxPrice && filters.maxPrice > 0) {
			filtered = filtered.filter(
				(hustler) => hustler.startingPrice <= filters.maxPrice!,
			);
		}

		// Language filter
		if (filters.languages && filters.languages.length > 0) {
			filtered = filtered.filter((hustler) =>
				filters.languages!.some((lang) => hustler.languages.includes(lang)),
			);
		}

		set({ filteredHustlers: filtered });
	},

	// Clear error
	clearError: () => {
		set({ error: null });
	},

	// Reset store
	reset: () => {
		set({
			hustlers: [],
			selectedHustler: null,
			filteredHustlers: [],
			isLoading: false,
			isLoadingDetail: false,
			error: null,
			filters: initialFilters,
			pagination: initialPagination,
			searchQuery: '',
			availableSkills: [],
			availableLanguages: [],
		});
	},

	// Getters
	getHustlerById: (id) => {
		return get().hustlers.find((hustler) => hustler.id === id);
	},

	getTopRatedHustlers: (limit = 5) => {
		return get()
			.hustlers.filter((hustler) => hustler.reviewCount > 0)
			.sort((a, b) => b.rating - a.rating)
			.slice(0, limit);
	},

	getHustlersBySkill: (skill) => {
		return get().hustlers.filter((hustler) =>
			hustler.skills.some((s) => s.toLowerCase() === skill.toLowerCase()),
		);
	},

	getFeaturedHustlers: () => {
		// Featured could be based on rating, review count, or a specific flag
		return get()
			.hustlers.filter(
				(hustler) => hustler.rating >= 4.5 && hustler.reviewCount >= 10,
			)
			.sort((a, b) => b.reviewCount - a.reviewCount)
			.slice(0, 6);
	},
}));

// Utility hooks for common patterns
export const useHustlerList = () => {
	const {
		filteredHustlers,
		isLoading,
		error,
		fetchHustlers,
		loadMoreHustlers,
		pagination,
	} = useHustlerStore();

	return {
		hustlers: filteredHustlers,
		isLoading,
		error,
		fetchHustlers,
		loadMoreHustlers,
		hasMore: pagination.hasMore,
	};
};

export const useHustlerDetail = (id?: string) => {
	const {
		selectedHustler,
		isLoadingDetail,
		error,
		fetchHustlerById,
		selectHustlerById,
		getHustlerById,
	} = useHustlerStore();

	return {
		hustler: selectedHustler,
		isLoading: isLoadingDetail,
		error,
		fetchHustlerById,
		selectHustlerById,
		getHustlerById,
	};
};

export const useHustlerSearch = () => {
	const {
		searchQuery,
		filters,
		availableSkills,
		availableLanguages,
		setSearchQuery,
		setFilters,
		clearFilters,
		filteredHustlers,
	} = useHustlerStore();

	return {
		searchQuery,
		filters,
		availableSkills,
		availableLanguages,
		results: filteredHustlers,
		setSearchQuery,
		setFilters,
		clearFilters,
	};
};
