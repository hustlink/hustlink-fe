import { ButtonPlayground } from '@/components/playground/button-pg';
import { Button } from '@/components/ui/button';

export default function Playground() {
	return (
		<div className='min-h-screen p-8 bg-background'>
			<div className='max-w-6xl mx-auto space-y-12'>
				<div className='text-center space-y-4'>
					<h1 className='text-4xl font-bold tracking-tight'>
						Component Playground
					</h1>
					<p className='text-lg text-muted-foreground'>
						Test and showcase UI components in various states and configurations
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
	);
}
