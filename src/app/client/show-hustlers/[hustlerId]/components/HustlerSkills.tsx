export default function HustlerSkills({ skills }: { skills: string[] }) {
	return (
		<div className='bg-white rounded-2xl shadow-lg p-6'>
			<h2 className='text-2xl font-bold text-gray-900 mb-4'>
				Skills & Expertise
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
				{skills.map((skill, i) => (
					<div
						key={i}
						className='flex items-center px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg'
					>
						<div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
						<span className='text-blue-900 font-medium'>{skill}</span>
					</div>
				))}
			</div>
		</div>
	);
}
