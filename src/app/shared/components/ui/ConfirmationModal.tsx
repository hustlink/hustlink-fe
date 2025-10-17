'use client';

import { useEffect } from 'react';

type ConfirmationModalProps = {
	open: boolean;
	title?: string;
	description?: string;
	confirmText?: string;
	cancelText?: string;
	onConfirm: () => void | Promise<void>;
	onCancel: () => void;
	isLoading?: boolean;
};

export default function ConfirmationModal({
	open,
	title = 'Are you sure?',
	description,
	confirmText = 'Confirm',
	cancelText = 'Cancel',
	onConfirm,
	onCancel,
	isLoading = false,
}: ConfirmationModalProps) {
	// close on ESC
	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onCancel();
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [open, onCancel]);

	if (!open) return null;

	return (
		<div
			className='fixed inset-0 z-[100] flex items-center justify-center'
			aria-modal='true'
			role='dialog'
		>
			{/* backdrop */}
			<div className='absolute inset-0 bg-black/40' onClick={onCancel} />
			{/* modal */}
			<div className='relative z-[101] w-full max-w-md rounded-2xl bg-white p-5 shadow-xl'>
				<h3 className='text-lg font-semibold text-gray-900'>{title}</h3>
				{description ? (
					<p className='mt-2 text-sm text-gray-600'>{description}</p>
				) : null}

				<div className='mt-5 flex items-center justify-end gap-3'>
					<button
						type='button'
						onClick={onCancel}
						className='inline-flex h-10 items-center rounded-md border border-gray-300 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50'
						disabled={isLoading}
					>
						{cancelText}
					</button>
					<button
						type='button'
						onClick={onConfirm}
						className='inline-flex h-10 items-center rounded-md bg-red-600 px-4 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60'
						disabled={isLoading}
					>
						{isLoading ? 'Processing...' : confirmText}
					</button>
				</div>
			</div>
		</div>
	);
}
