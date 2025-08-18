import { MdOutlineFileUpload } from 'react-icons/md';

export default function UploadCVPage() {
	return (
		<section className='min-h-screen bg-[#DFE7F2] flex items-center justify-center px-6 py-12'>
			<div className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10'>
				{/* Left Column - Description */}
				<div>
					<h2 className='text-6xl font-bold mb-8'>Let's create your profile</h2>
					<br />
					<p className='text-lg mt-8 mb-4'>
						Tell us about yourself, your education, experience, and skills. The
						fastest way is to import your information, which you can review and
						edit before your profile is published.
					</p>
					<br />
					<p className='text-lg font-bold text-blue-500 mt-4'>
						Use a PDF, Word doc, or rich text file. Make sure it’s 5MB or less
						and ATS format.
					</p>
				</div>

				{/* Right Column - Card */}
				<div className='rounded-2xl mx-auto my-auto shadow-xl p-6 justify-center items-center w-100 h-100 text-center'>
					<h2 className='items-center text-[12rem]'>
						<MdOutlineFileUpload className='mx-auto font-bold mb-4' />
					</h2>
					<button
						type='submit'
						className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition mb-4'
					>
						Submit CV
					</button>
					<br />
					<h2 className='text-2xl mt-2'>or drop a file from your computer</h2>
				</div>
			</div>
		</section>
	);
}

export { UploadCVPage };
