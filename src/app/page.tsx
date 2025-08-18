import Image from 'next/image';
import Link from 'next/link';
import { Button } from './shared/components/ui/button';
import { Navbar } from './shared/components/widgets/Navbar';

export default function Home() {
	return (
		<>
			<div>
				<Navbar
					leftContent={<Link href='/' className='text-blue-600'></Link>}
				/>
			</div>
			<div className='grid grid-rows-[10px_1fr_10px] min-h-screen p-2 gap-6 sm:p-6'>
				<main className='flex flex-col gap-[16px] row-start-2 items-center sm:items-start'>
					<h1 className='text-4xl font-bold tracking-tight text-center sm:text-left'>
						Welcome to <span className='text-blue-600'>Hustlink</span>
					</h1>
					<div className='space-y-2'>
						<h2 className='text-2xl font-semibold text-center sm:text-left'>
							Check out our features and components here!
						</h2>
					</div>

					{/*General Features*/}
					<div className='space-y-4'>
						<h3 className='text-lg font-medium'>General Features</h3>
						<div className='flex flex-col sm:flex-row gap-4'>
							<Link href={'/tempLanding'}>
								<Button>Landing Page</Button>
							</Link>
							<Link href={'/login'}>
								<Button>Login</Button>
							</Link>
							<Link href={'/signup'}>
								<Button>Sign Up</Button>
							</Link>
						</div>
					</div>

					{/*Client Related Features*/}
					<div className='space-y-4'>
						<h3 className='text-lg font-medium'>Client Related Features</h3>
						<div className='flex flex-col sm:flex-row gap-4'>
							<Link href={'/client'}>
								<Button>Client Landing Page</Button>
							</Link>
							<Link href={'/client/show-hustlers'}>
								<Button>Hustlers Page</Button>
							</Link>
							<Link href={'/client/chat'}>
								<Button variant='outline'>Chat Feature</Button>
							</Link>
						</div>
					</div>

					{/*Freelancer Related Features*/}
					<div className='space-y-4'>
						<h3 className='text-lg font-medium'>Freelancer Related Features</h3>
						<div className='flex flex-col sm:flex-row gap-4'>
							<Link href={'/freelancer'}>
								<Button>Freelancer Landing Page</Button>
							</Link>
							<Link href={'/freelancer/profile/uploadCV'}>
								<Button>Upload CV</Button>
							</Link>
							<Link href={'/freelancer/profile/addWorkField'}>
								<Button>Add Work Field</Button>
							</Link>
							<Link href={'/freelancer/profile/updateProfile'}>
								<Button>Update Profile</Button>
							</Link>
							<Link href={'/freelancer/profile/addPhotoPage'}>
								<Button>Add Photo</Button>
							</Link>
							<Link href={'/freelancer/profile/addBioPage'}>
								<Button>Add Bio</Button>
							</Link>
						</div>
					</div>

					{/*Playground*/}
					<div className='space-y-4'>
						<h3 className='text-lg font-medium'>Playground</h3>
						<div className='flex flex-col sm:flex-row gap-4'>
							<Link href={'/playground'} className='cursor-pointer'>
								<Button>Button Playground</Button>
							</Link>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}
