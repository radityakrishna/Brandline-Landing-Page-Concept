import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeatureCard = ({ logo, title, content, cta, logo2 }) => {
    return (
        <div className='h-full w-full py-3 md:py-0'>
            <div className='flex flex-col justify-between items-center'>
            <div className='flex flex-col justify-between items-center'>
                <Image src={logo} alt='benefitlogo' />
                <p className='font-medium text-customBlack md:text-sm lg:text-lg text-xs pt-3'>{title}</p>
                <div className='px-14 md:px-6 lg:px-24 pt-2'>
                    <p className='text-[#70798C] text-[10px] md:text-xs lg:text-base text-center'>{content}</p>
                </div>
            </div>
            <div className='pt-3'>
            <Link href='/' className='flex flex-row items-center gap-1'>
                <p className='text-customPurple text-[10px] md:text-xs lg:text-sm'>{cta}</p>
                <div className='pt-1'>
                <Image src={logo2} alt='arrow' className='w-3' />
                </div>
            </Link>
            </div>
            </div>


        </div>

    )
}

export default FeatureCard