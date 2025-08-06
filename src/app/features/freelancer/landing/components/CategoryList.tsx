export default function CategoryList() {
	const categories = [
		{
			title: 'Design',
			description: 'UI/UX, graphics, and branding',
			rating: 4.7,
		},
		{
			title: 'Development',
			description: 'Web, mobile, and backend',
			rating: 4.9,
		},
		{ title: 'Marketing', description: 'SEO, ads, and analytics', rating: 4.5 },
		{
			title: 'Business',
			description: 'Strategy, ops, and growth',
			rating: 4.6,
		},
		{
			title: 'Writing',
			description: 'Content, blogs, and copywriting',
			rating: 4.8,
		},
		{
			title: 'Support',
			description: 'Customer success and community',
			rating: 4.4,
		},
	];

	return (
		<section className='w-full py-16 px-4 bg-[#DFE7F2]'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-5xl font-bold mb-2'>Browse Talent by Category</h2>
				<h3 className='text-2xl text-grey-500 mb-4'>
					Looking for hustle? <span className='text-blue-500'>
						Sign up now
					</span>{' '}
				</h3>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
					{categories.map((category, index) => (
						<div
							key={index}
							className='bg-white hover:bg-blue-100 transition-colors rounded-xl p-6 shadow-md flex flex-col justify-between h-40'
						>
							{/* Top: Title */}
							<h3 className='text-xl font-semibold'>{category.title}</h3>

							{/* Bottom: Description + Rating */}
							<div className='flex justify-between items-end mt-auto'>
								<p className='text-sm text-gray-600'>{category.description}</p>
								<div className='text-sm font-medium text-yellow-500 flex items-center gap-1'>
									⭐ {category.rating}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
