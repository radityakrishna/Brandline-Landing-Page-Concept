import React from 'react'
import Image from 'next/image';
import { logofooter } from '../assets';
import { BiPlayCircle } from 'react-icons/bi';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='h-full w-full bg-bgDark'>
      <div className='items-center flex flex-col pt-8 pb-3 justify-center'>

        {/*Upper Section */}
        <Image src={logofooter} alt="logofooter" className='h-4 w-4 md:h-7 md:w-7' />
        <div className='md:mt-4 mt-2'>
          <p className='text-primaryWhite lg:text-[36px] md:text-[24px] font-medium'>Let&apos;s get started on something great</p>
        </div>
        <div className='mt-2'>
          <p className='text-customGrey md:text-xs lg:text-sm text-[9px]
             font-light '>Join over 4,000+ startups already growing with Brandline</p>
        </div>

        {/*Button */}
        <div className='mt-7 items-center flex gap-3'>
          <button className='bg-primaryWhite rounded items-center flex w-[90px] md:w-[110px] lg:w-[120px]'>
            <BiPlayCircle className='ml-3' />
            <p className='pr-2 pl-1 py-2 text-[9px] md:text-xs lg:text-sm'>View Demo</p>
          </button>
          <button className='bg-customPurple rounded items-center justify-center flex w-[90px] md:w-[110px] lg:w-[120px]'>
            <p className='p-2 justify-center text-[9px] md:text-xs lg:text-sm text-primaryWhite'>Get Started</p>
          </button>
        </div>


        {/*Lower Section */}

        {/*Line Separator */}
        
      </div>
      <div className="pt-8">
          <canvas className='bg-[#475467] w-full h-[1px]'></canvas>
        </div>

      <div className='flex flex-row items-center w-full justify-between px-4 md:px-10 lg:px-14 xl:px-18 py-4'>
        <div>
        <p className='text-[#98A2B3] md:text-xs lg:text-sm font-light text-[9px]'>© 2022 Untitled UI. All rights reserved.</p>
        </div>
        <div>
          <ul className='flex'>
            <Link href='/'>
              <li className='text-[9px] md:text-xs lg:text-sm font-light text-[#98A2B3] px-[2px] md:px-2 xl:px-3'>
                Terms
              </li>
            </Link>
            <Link href='/'>
              <li className='text-[9px] md:text-xs lg:text-sm font-light text-[#98A2B3] px-[2px] md:px-2 xl:px-3'>
                Privacy
              </li>
            </Link>
            <Link href='/'>
              <li className='text-[9px] md:text-xs lg:text-sm font-light text-[#98A2B3] px-[2px] md:px-2 xl:px-3'>
                Cookies
              </li>
            </Link>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Footer