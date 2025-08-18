'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/app/shared/components/widgets/Navbar'
export default function UpdateProfile() {
  // const { data: session } = useSession();
  // const router = useRouter();

  // const username = session?.user?.name || 'Guest';

  //  const handleEditProfile = () => {
  //   router.push('/editprofile'); // ✅ navigate to uploadCV page
  // };

  return (
    <>
    <Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#DFE7F2] w-[1136px] mx-auto">
      {/* Title */}
      <h1 className="text-4xl text-blue-500 font-bold mb-6">
        {/* Hello {username}, */}
      </h1>
      <h1 className='text-4xl font-bold mb-6'>
        Welcome to Hust<span className='text-blue-500'>link</span>!
      </h1>
      <p className='flex justify-center items-center w-[753px] mx-auto text-center text-lg font-semibold'>
        We’re excited to have you as part of our growing community, Whether you’re here to connect, collaborate, learn, or grow your career. Hustlink is built to support your journey
      </p>

      {/* Button Row */}
      <div className="flex gap-4 mt-4">
        <Link href={'/freelancer/profile/uploadCV'}>
        <button
        // onClick={handleEditProfile} 
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Start with your CV
        </button>
        </Link>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Input data manually
        </button>
      </div>
      <p className='text-center mt-4'>It only takes 5-10 minutes and you can edit it later. </p>
    </div>
    </>
  );
}

export { UpdateProfile };
