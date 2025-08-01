import { ButtonPlayground } from '@/app/shared/components/playground/button-pg';
import { Button } from '@/app/shared/components/ui/button';
import { Navbar } from '@/app/shared/components/ui/navbar';

export default function Playground() {
	return (
		<>
			<Navbar
				leftContent={
					<>
						<a href='/about' className='text-gray-700 hover:text-blue-500'>
							About
						</a>
						<a href='/services' className='text-gray-700 hover:text-blue-500'>
							Services
						</a>
						<a href='/contact' className='text-gray-700 hover:text-blue-500'>
							Contact
						</a>
					</>
				}
				rightContent={
					<>
						<button className='bg-blue-500 text-white px-3 py-1 rounded'>
							Login
						</button>
					</>
				}
			/>
			<div className='min-h-screen p-8 bg-background'>
				<div className='max-w-6xl mx-auto space-y-12'>
					<div className='text-center space-y-4'>
						<h1 className='text-4xl font-bold tracking-tight'>
							Component Playground
						</h1>
						<p className='text-lg text-muted-foreground'>
							Test and showcase UI components in various states and
							configurations
						</p>
					</div>

					<ButtonPlayground />
					<section className='space-y-6'>
						<div className='space-y-2'>
							<h2 className='text-2xl font-semibold'>Component Testing Area</h2>
							<p className='text-muted-foreground'>
								Interactive area for testing component combinations
							</p>
						</div>
						<div className='p-8 border-2 border-dashed border-muted rounded-lg'>
							<div className='text-center space-y-4'>
								<p className='text-muted-foreground'>
									Add your components here for testing
								</p>
								<Button>Test Component</Button>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
