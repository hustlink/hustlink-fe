'use client';

import React, { useState } from 'react';
import { Button } from '@/app/shared/components/ui/button';

const AddWorkFieldPage: React.FC = () => {
	const [company, setCompany] = useState('');
	const [role, setRole] = useState('');
	const [fromDate, setFromDate] = useState('');
	const [untilDate, setUntilDate] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const workData = {
			company,
			role,
			fromDate,
			untilDate,
			description,
		};
		console.log('Work Experience Submitted:', workData);
		// Kirim ke backend atau simpan ke state global di sini
	};

	return (
		<div className='max-w-2xl mx-auto p-6 rounded-lg shadow-md bg-white'>
			<h2 className='text-2xl font-bold mb-6'>Add Work Experience</h2>
			<form onSubmit={handleSubmit} className='space-y-4'>
				{/* Company */}
				<div>
					<label className='block mb-1'>Company *</label>
					<input
						type='text'
						placeholder='Ex: Microsoft'
						className='w-full border border-gray-300 rounded px-3 py-2'
						value={company}
						onChange={(e) => setCompany(e.target.value)}
						required
					/>
				</div>

				{/* Role */}
				<div>
					<label className='block mb-1'>Role *</label>
					<input
						type='text'
						placeholder='Ex: Front end engineer'
						className='w-full border border-gray-300 rounded px-3 py-2'
						value={role}
						onChange={(e) => setRole(e.target.value)}
						required
					/>
				</div>

				{/* Dates Attended */}
				<div>
					<label className='block mb-1'>Dates Attended *</label>
					<div className='flex gap-4'>
						<select
							className='w-full border border-gray-300 rounded px-3 py-2'
							value={fromDate}
							onChange={(e) => setFromDate(e.target.value)}
							required
						>
							<option value=''>From</option>
							<option value='2020'>2020</option>
							<option value='2021'>2021</option>
							<option value='2022'>2022</option>
							<option value='2023'>2023</option>
							<option value='2024'>2024</option>
						</select>
						<select
							className='w-full border border-gray-300 rounded px-3 py-2'
							value={untilDate}
							onChange={(e) => setUntilDate(e.target.value)}
							required
						>
							<option value=''>Until</option>
							<option value='2020'>2020</option>
							<option value='2021'>2021</option>
							<option value='2022'>2022</option>
							<option value='2023'>2023</option>
							<option value='2024'>2024</option>
						</select>
					</div>
				</div>

				{/* Description */}
				<div>
					<label className='block mb-1'>Description</label>
					<textarea
						placeholder='Tell us what your job involved and how your work made a difference.'
						className='w-full border border-gray-300 rounded px-3 py-2'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						rows={5}
					/>
				</div>

				{/* Buttons */}
				<div className='flex justify-end gap-4'>
					<Button
						type='button'
						variant='ghost'
						className='text-base'
						onClick={() => {
							setCompany('');
							setRole('');
							setFromDate('');
							setUntilDate('');
							setDescription('');
						}}
					>
						Cancel
					</Button>
					<Button
						type='submit'
						variant='default'
						size='default'
						className='text-base'
					>
						Save
					</Button>
				</div>
			</form>
		</div>
	);
};

export default AddWorkFieldPage;
