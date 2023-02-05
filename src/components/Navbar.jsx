import Image from 'next/image';
import Link from 'next/link';
import { logo } from '../assets';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };




    return (
        <nav className='sticky top-0 bg-heroBlue w-full'>
            <div className='flex flex-row items-center w-full justify-between '>
        <div className='flex px-4 py-4 md:py-6 md:px-6 lg:px-8 xl:px-10 items-center w-full h-full justify-between'>
            {/* Logo */}
            <Image src={logo} alt="herologo" className='w-[140px]' />

            {/* Menu */}
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='text-base  md:px-2 xl:px-3'>
                            Our services
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className='text-base  md:px-2 xl:px-3'>
                            Pricing
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className='text-base  md:px-2 xl:px-3'>
                            Portfolio
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className='text-base md:px-2 xl:px-3'>
                            How it works
                        </li>
                    </Link>
                </ul>
            </div>


            {/* Buttons */}
            <div className='hidden md:flex'>
                <button
                    type='button'
                    className='border-customBlack border-[1px] border-solid 
                rounded text-sm mr-3 '>
                    <p className='px-2 py-1'>Join community</p>
                </button>
                <button type='button' className=' border-customBlack border-[1px] border-solid 
                rounded text-sm bg-customBlack text-primaryWhite '>
                    <p className='px-2 py-1'>Contact us</p>
                </button>
            </div>
            

            
            


            
        </div>
{/*Mobile Sidebar*/}
        <div onClick={handleNav} className='md:hidden pr-4'>
                <AiOutlineMenu size={20} />
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-customBlack/50' : ''} onClick={handleNav}>
                <div className={nav 
                ? 'fixed left-0 top-0 w-[60%] md:hidden h-screen bg-heroBlue px-4 py-6 ease-in duration-500'
                : 'fixed left-[-100%] top-0 ease-out duration-500'}>
                    <div className='flex w-full items-center justify-between'>
                        <Image src={logo} alt='sidebarlogo' className='w-[100px]' />
                        <div>
                            <AiOutlineClose onClick={handleNav} />
                        </div>
                    </div>
                    <div className='py-6 flex flex-col'>
                        <ul>
                            <Link href='/'>
                                <li className='py-2 text-xs  text-customBlack'>
                                    Our services
                                </li>
                            </Link>
                            <Link href='/'>
                                <li className='py-2 text-xs  text-customBlack'>
                                    Pricing
                                </li>
                            </Link>
                            <Link href='/'>
                                <li className='py-2 text-xs  text-customBlack'>
                                    Portfolio
                                </li>
                            </Link>
                            <Link href='/'>
                                <li className='py-2 text-xs  text-customBlack'>
                                    How it works
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className='py-2 items-start justify-between'>
                    <button
                    type='button'
                    className='border-customBlack border-[1px] border-solid 
                rounded text-xs'>
                    <p className='px-2 py-1'>Join community</p>
                </button>
                <button type='button' className=' border-customBlack border-[1px] border-solid 
                rounded text-xs mt-4 bg-customBlack'>
                    <p className='px-2 py-1 text-primaryWhite'>Contact us</p>
                </button>
                    </div>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar