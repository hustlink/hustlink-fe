import { GoStarFill } from 'react-icons/go';
import { MdAttachMoney } from 'react-icons/md';
import { TiPinOutline } from 'react-icons/ti';

export default function ThreeCardSection() {
	return (
		<section className='w-full py-16 px-4 bg-[#DFE7F2]'>
			<div className='max-w-6xl mx-auto text-center'>
				<h2 className='text-5xl font-bold mb-12 text-left'>
					Dreams don't work unless you do
				</h2>

				<div className='flex flex-col md:flex-row gap-6 text-left'>
					{/* First (wider) card */}
					<div className='flex-1 md:flex-[2] bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all h-56 flex items-center justify-center'>
						<div className='flex flex-col max-w-xs w-60'>
							<h3 className='text-2xl font-semibold mb-2 text-left'>
								Get started for free
							</h3>
							<p className='text-gray-600 text-sm italic text-left'>
								Explore top talent and connect with professionals. No fees, no
								hassle.
							</p>
						</div>
						<div className='text-7xl font-bold text-black'>
							<MdAttachMoney />
						</div>
					</div>

					{/* Second card */}
					<div className='flex-1 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all h-56 flex items-center justify-center text-center bg-blue-500'>
						<h3 className='text-7xl text-white'>
							<TiPinOutline />
						</h3>
					</div>

					{/* Third card */}
					<div className='flex-1 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all h-56 flex items-center justify-center text-center bg-blue-500'>
						<h3 className='text-7xl text-white'>
							<GoStarFill />
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
}
