// 'use client';

// import { FaArrowRight, FaStar } from 'react-icons/fa';
// import { Category } from '@/types/Category';

// const dummyCategories: Category[] = [
//     {
//         id: 1,
//         title: 'Full Stack Web Developer',
//         talents: 10,
//         rating: 5,
//     },
//     {
//         id: 2,
//         title: 'Full Stack Web Developer',
//         talents: 10,
//         rating: 5,
//     },
//     {
//         id: 3,
//         title: 'Full Stack Web Developer',
//         talents: 10,
//         rating: 5,
//     },
//     {
//         id: 4,
//         title: 'Full Stack Web Developer',
//         talents: 10,
//         rating: 5,
//     },
//     {
//         id: 5,
//         title: 'Full Stack Web Developer',
//         talents: 10,
//         rating: 5,
//     },
//     {
//         id: 6,
//         title: 'Full Stack Web Developer',
//         talents: 10,
//         rating: 5,
//     },
// ];

// export default function ListCategory() {
//     return (
//         <section className='w-full bg-[#dde8f5] py-16'>
//             <div className='max-w-screen-xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
//                 {dummyCategories.map((category) => (
//                     <div
//                         key={category.id}
//                         className='bg-white rounded-[40px] p-6 flex flex-col justify-between shadow-md transition hover:shadow-xl'
//                     >
//                         {/* Title */}
//                         <h3 className='text-2xl font-semibold text-gray-900 mb-8'>
//                             {category.title}
//                         </h3>

//                         {/* Footer */}
//                         <div className='flex items-center justify-between text-gray-800 text-lg font-medium'>
//                             <span>{category.talents} talents</span>

//                             <div className='flex items-center gap-1'>
//                                 <FaStar className='text-blue-600' />
//                                 <span>{category.rating}/5</span>
//                             </div>

//                             <FaArrowRight className='text-blue-600' />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
