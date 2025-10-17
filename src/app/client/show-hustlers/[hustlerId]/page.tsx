// app/client/show-hustlers/[hustlerId]/page.tsx
import Navbar from '@/app/client/show-hustlers/components/NavbarProfile';
import Typography from '@/app/shared/components/ui/Typography';
import { Footer } from '@/app/shared/components/widgets/Footer';
import BackHeader from '../../components/BackHeader';
import ChatOrOfferCard from './components/ChatOrOfferCard';
import ClientReviews from './components/ClientReviews';
import DetailRatings from './components/DetailRatings';
import HustlerAbout from './components/HustlerAbout';
import HustlerAdCarousel from './components/HustlerAdCarousel';
import HustlerHero from './components/HustlerHero';
import HustlerPortfolio from './components/HustlerPortofolio';
import HustlerReviews from './components/HustlerReviews';
import HustlerSidebar from './components/HustlerSidebar';
import HustlerSkills from './components/HustlerSkills';

const fakeHustler = {
	id: '1',
	name: 'Abdurahman Palim El Swipelero',
	firstName: 'Abdurahman',
	description:
		'I will do app creation build mobile app development, android app ios app development',
	bio: "Hi, I'm Abdur Palim a passionate and versatile Informatics Engineering graduate with specializations in Mobile Development, Data Science, Robotics, and Intelligent Systems. I thrive at the intersection of technology and real-world problem-solving, with hands-on experience building efficient, user-friendly mobile applications and intelligent systems.  Here’s what I bring to the table: Mobile Development Expertise: I've built and refined mobile apps using Flutter, focusing on clean UI, robust backend integration, and performance optimization. My recent projects include features like real-time search, dynamic filtering, and custom state management using Provider and BLoC patterns. AI & Intelligent Systems: From object detection using YOLO and ONNX to speed estimation via geometric image transformations, I enjoy merging computer vision and real-time data to solve complex problems. Data-Driven Thinking: Through the Bangkit program, I gained strong foundations in machine learning, model deployment, and applied data analysis. My projects include predictive models such as memorization progress tracking using structured data. Collaborative & Fast Learner: I've contributed to cross-functional teams and adapted quickly to new stacks and tools — from robotics hardware to mobile UIs — always eager to learn and improve.",
	primaryCategory: 'Mobile App Development',
	startingPrice: 100,
	minimumPayment: 80,
	rating: 4.8,
	reviewCount: 120,
	ratingsBreakdown: {
		5: 80,
		4: 25,
		3: 10,
		2: 3,
		1: 2,
	},
	languages: ['English', 'Arabic'],
	skills: ['Responsive Website', 'Dynamic Website', 'Functional Web App'],
	profileImage: '/image/client/hustler-profile.svg',
	coverImage: '/image/client/hustler-cover-edit.svg',
	advertisementImages: [
		'/image/client/hustler-ad-1.svg',
		'/image/client/hustler-ad-2.svg',
	],
	socialLinks: {
		linkedin: 'https://linkedin.com/in/abdurahman',
		github: 'https://github.com/abdurahman',
	},
	showcases: [
		{
			title: 'Microsoft',
			role: 'Software Engineer',
			period: 'February 2020 - Present',
			technologies: ['React Native', 'Node.js', 'MongoDB'],
			description: 'Develop an advanced Total Secured Antimalware Software.',
			images: [
				'/image/client/hustler-showcase-1.svg',
				'/image/client/hustler-showcase-2.svg',
			],
		},
		{
			title: 'E-Commerce Mobile App',
			role: 'Lead Developer',
			period: 'January 2023 - June 2023',
			technologies: ['Flutter', 'Node.js', 'PostgreSQL'],
			description:
				'Developed a cross-platform e-commerce app with seamless payment integration.',
			images: [
				'/image/client/hustler-showcase-1.svg',
				'/image/client/hustler-showcase-2.svg',
			],
		},
		{
			title: 'E-Ticket Mobile App',
			role: 'Senior Developer',
			period: 'January 2024 - December 2024',
			technologies: ['Kotlin', 'Express.js', 'MySQL'],
			description:
				'Developed a asdlnasldnals aslkdnasldnasl asldnaslkdnaslkd askldnnskks asldk knsdkn asdkk.',
			images: [
				'/image/client/hustler-showcase-1.svg',
				'/image/client/hustler-showcase-2.svg',
			],
		},
		{
			title: 'Parking+ Mobile App',
			role: 'Senior Developer',
			period: 'January 2025 - Present',
			technologies: ['Kotlin', 'Express.js', 'MySQL'],
			description:
				'Developed a asdlnasldnals aslkdnasldnasl asldnaslkdnaslkd askldnnskks asldk knsdkn asdkk.',
			images: [
				'/image/client/hustler-showcase-1.svg',
				'/image/client/hustler-showcase-2.svg',
			],
		},
	],
	reviews: [
		{
			reviewerName: 'Sarah K.',
			reviewerImage: '/image/client/hustler-profile.svg',
			rating: 5,
			comment: 'Amazing work on our mobile app!',
		},
		{
			reviewerName: 'Tom L.',
			reviewerImage: '/image/client/hustler-profile.svg',
			rating: 5,
			comment: 'Delivered on time with great quality.',
		},
		{
			reviewerName: 'Emma R.',
			reviewerImage: '/image/client/hustler-profile.svg',
			rating: 4,
			comment: 'Solid app, minor tweaks needed.',
		},
	],
};

export default function ShowHustlerDetailPage() {
	const hustler = fakeHustler;

	return (
		<div className="flex flex-col w-full min-h-screen bg-[#DFE7F2] bg-[url('/image/client/hustler-background.svg')] bg-center bg-no-repeat bg-cover antialiased">
			<Navbar />
			<BackHeader />

			<div className='flex flex-col max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 mt-8'>
				{/* Hero Section */}
				<HustlerHero hustler={hustler} />

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
					<div className='lg:col-span-2 space-y-8'>
						<HustlerAdCarousel images={hustler.advertisementImages} />
					</div>

					{/* Sidebar */}
					<div className='space-y-8'>
						<ChatOrOfferCard
							firstName={hustler.firstName}
							primaryCategory={hustler.primaryCategory}
							startingPrice={hustler.startingPrice}
							minimumPayment={hustler.minimumPayment}
						/>
					</div>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-3 mb-4'>
					<div className='lg:col-span-2 space-y-8'>
						<Typography variant='j3' as='h2' color='primary'>
							People Reviews
						</Typography>
					</div>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 py-1 items-stretch'>
					<div className='lg:col-span-2 space-y-8'>
						<div className='h-full'>
							<ClientReviews reviews={hustler.reviews} />
						</div>
					</div>
					<div className='space-y-8'>
						<div className='h-full'>
							<DetailRatings
								rating={hustler.rating}
								reviewCount={hustler.reviewCount}
								ratingsBreakdown={hustler.ratingsBreakdown}
							/>
						</div>
						{/* <HustlerSidebar hustler={hustler} /> */}
					</div>
				</div>
				<HustlerAbout
					bio={hustler.bio}
					firstName={hustler.firstName}
					skills={hustler.skills}
					languages={hustler.languages}
				/>
				<HustlerPortfolio showcases={hustler.showcases} />
			</div>
			<Footer />
		</div>
	);
}
