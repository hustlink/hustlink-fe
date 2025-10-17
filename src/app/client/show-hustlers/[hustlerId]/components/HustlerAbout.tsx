import Typography from '@/app/shared/components/ui/Typography';

export default function HustlerAbout({
	bio,
	firstName,
	skills,
	languages,
}: {
	bio: string;
	firstName: string;
	skills: string[];
	languages: string[];
}) {
	const formatSkills = (skills: string[]) => {
		if (skills.length === 0) return '';
		if (skills.length === 1) return `${skills[0]}.`;
		if (skills.length === 2) return `${skills[0]} and ${skills[1]}.`;

		return skills
			.map((skill, index) => {
				if (index === skills.length - 1) {
					return `and ${skill}.`;
				}
				return `${skill}, `;
			})
			.join('');
	};

	return (
		<section
			className='bg-transparent rounded-xl py-4 mb-8 space-y-4'
			aria-labelledby='hustler-hero-heading'
		>
			<Typography variant='j3' as='h2' color='primary'>
				Get To Know {firstName}
			</Typography>
			<div className='flex flex-col bg-white rounded-lg shadow-lg p-6 gap-4 items-center'>
				<div className='w-full border-b-2 border-black'>
					<Typography variant='h2' as='h2' className='mb-2'>
						Skills
					</Typography>
					<div className='h-fit mb-6'>
						<Typography variant='b2' as='p' color='primary'>
							{formatSkills(skills)}
						</Typography>
					</div>
					<Typography variant='h2' as='h2' className='mb-2'>
						Languages
					</Typography>
					<div className='h-fit mb-8'>
						<Typography variant='b2' as='p' color='primary'>
							{formatSkills(languages)}
						</Typography>
					</div>
				</div>
				<div className='w-full mt-4'>
					<Typography variant='b2' className='text-justify leading-relaxed'>
						{bio}
					</Typography>
				</div>
			</div>
		</section>
	);
}
