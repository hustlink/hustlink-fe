'use client';
import React from 'react';
import { Button } from '@/components/ui/button';

export function ButtonPlayground() {
	return (
		<section className='space-y-6'>
			<div className='space-y-2'>
				<h2 className='text-2xl font-semibold'>Button Component</h2>
				<p className='text-muted-foreground'>
					Various button variants, sizes, and states
				</p>
			</div>

			{/* Button Variants */}
			<div className='space-y-4'>
				<h3 className='text-lg font-medium'>Variants</h3>
				<div className='flex flex-wrap gap-4'>
					<Button variant='default'>Default</Button>
					<Button variant='destructive'>Destructive</Button>
					<Button variant='outline'>Outline</Button>
					<Button variant='secondary'>Secondary</Button>
					<Button variant='ghost'>Ghost</Button>
					<Button variant='link'>Link</Button>
				</div>
			</div>

			{/* Button Sizes */}
			<div className='space-y-4'>
				<h3 className='text-lg font-medium'>Sizes</h3>
				<div className='flex flex-wrap items-center gap-4'>
					<Button size='sm'>Small</Button>
					<Button size='default'>Default</Button>
					<Button size='lg'>Large</Button>
					<Button size='icon'>🎯</Button>
				</div>
			</div>

			{/* Button States */}
			<div className='space-y-4'>
				<h3 className='text-lg font-medium'>States</h3>
				<div className='flex flex-wrap gap-4'>
					<Button>Normal</Button>
					<Button disabled>Disabled</Button>
					<Button className='loading'>Loading...</Button>
				</div>
			</div>

			{/* Interactive Examples */}
			<div className='space-y-4'>
				<h3 className='text-lg font-medium'>Interactive Examples</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					<div className='p-6 border rounded-lg space-y-4'>
						<h4 className='font-medium'>Counter Example</h4>
						<CounterExample />
					</div>

					<div className='p-6 border rounded-lg space-y-4'>
						<h4 className='font-medium'>Form Actions</h4>
						<FormExample />
					</div>

					<div className='p-6 border rounded-lg space-y-4'>
						<h4 className='font-medium'>Confirmation Dialog</h4>
						<ConfirmationExample />
					</div>
				</div>
			</div>
		</section>
	);
}

// Interactive component examples
function CounterExample() {
	const [count, setCount] = React.useState(0);

	return (
		<div className='space-y-3'>
			<div className='text-2xl font-mono text-center p-4 bg-muted rounded'>
				{count}
			</div>
			<div className='flex gap-2'>
				<Button
					variant='outline'
					size='sm'
					onClick={() => setCount((c) => c - 1)}
				>
					-
				</Button>
				<Button variant='outline' size='sm' onClick={() => setCount(0)}>
					Reset
				</Button>
				<Button
					variant='outline'
					size='sm'
					onClick={() => setCount((c) => c + 1)}
				>
					+
				</Button>
			</div>
		</div>
	);
}

function FormExample() {
	const [submitted, setSubmitted] = React.useState(false);

	const handleSubmit = () => {
		setSubmitted(true);
		setTimeout(() => setSubmitted(false), 2000);
	};

	return (
		<div className='space-y-3'>
			<div className='space-y-2'>
				<input
					type='text'
					placeholder='Enter some text...'
					className='w-full p-2 border rounded'
				/>
			</div>
			<div className='flex gap-2'>
				<Button size='sm' onClick={handleSubmit} disabled={submitted}>
					{submitted ? 'Submitted!' : 'Submit'}
				</Button>
				<Button variant='outline' size='sm'>
					Cancel
				</Button>
			</div>
		</div>
	);
}

function ConfirmationExample() {
	const [showConfirm, setShowConfirm] = React.useState(false);
	const [deleted, setDeleted] = React.useState(false);

	const handleDelete = () => {
		setDeleted(true);
		setShowConfirm(false);
		setTimeout(() => setDeleted(false), 2000);
	};

	if (deleted) {
		return (
			<div className='text-center py-4'>
				<p className='text-green-600'>✓ Deleted successfully!</p>
			</div>
		);
	}

	if (showConfirm) {
		return (
			<div className='space-y-3'>
				<p className='text-sm text-muted-foreground'>
					Are you sure you want to delete this item?
				</p>
				<div className='flex gap-2'>
					<Button variant='destructive' size='sm' onClick={handleDelete}>
						Delete
					</Button>
					<Button
						variant='outline'
						size='sm'
						onClick={() => setShowConfirm(false)}
					>
						Cancel
					</Button>
				</div>
			</div>
		);
	}

	return (
		<Button variant='destructive' onClick={() => setShowConfirm(true)}>
			Delete Item
		</Button>
	);
}
