'use client';

import Image from 'next/image';
import { Navbar } from '@/app/shared/components/widgets/Navbar';

export default function NavbarProfile() {
    return (
        <Navbar
            leftContent={
                <span className='text-2xl font-bold'>
                    Hust<span className='text-blue-500'>link</span>
                </span>
            }
            rightContent={
                <div className='flex items-center gap-4'>
                    <Image
                        src='/Group.svg'
                        alt='Profile'
                        width={45}
                        height={45}
                    />
                </div>
            }
        />
    );
}
export {NavbarProfile};