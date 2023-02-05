import Image from 'next/image';
import { pitch2mobile } from '../assets';

const Pitch2 = () => {
    return (
        <div className='bg-primaryWhite h-full md:px-6 lg:px-8 xl:px-10 py-3 w-full'>
        <section className='flex md:flex-row flex-col items-center justify-between md:px-10 lg:px-16'>

            {/* Left Side Screen */}
            <div className='flex-col flex md:justify-start md:items-start md:w-[50%] items-center justify-center md:ml-6 
            lg:ml-10 xl:ml-16 md:order-2'>
                <div className='bg-[#E5E8FF] mt-3 rounded-t-md rounded-br-md'>
                    <p className='text-[10px] text-customPurple p-[2px] md:px-2 md:py-1'>
                        02 - WE CAN DO
                    </p>
                </div>
                <div className='leading-tight pt-3 flex-col flex justify-center items-center md:justify-start md:items-start'>
                    <p className='md:text-3xl lg:text-5xl xl:text-6xl text-xl text-customBlack justify-center font-medium'>
                        Increase eComm
                    </p>
                    <p className='md:text-3xl lg:text-5xl xl:text-6xl text-xl text-customBlack justify-center font-medium'>
                        Sales by 220%
                    </p>
                </div>
                {/*Description for Big Screen*/}
                <div className='md:max-w-[300px] lg:max-w-[550px] md:pt-4 pt-2 leading-2 hidden md:flex'>
                    <p className='text-[#667085] md:text-xs lg:text-base text-[6px]'>Our team is unique to us, just how you are unique to you. The track record behind us, lays the playing field for the course ahead. We are builders, unwavering winners.</p>
                </div>
                {/*Description for Mobile Screen*/}
                <div className='max-w-[350px] md:pt-4 pt-2 leading-2 flex-col flex md:hidden justify-center items-center'>
                    <p className='text-[#667085] text-[8px]'>
                    Our team is unique to us, just how you are unique to you.
                    </p>
                    <p className='text-[#667085] text-[8px]'>
                    The track record behind us, lays the playing field for the course ahead.
                    </p>
                    <p className='text-[#667085] text-[8px]'>
                    We are builders, unwavering winners.
                    </p>
                    
                </div>


                {/*Image for Mobile Screen*/}
                <div className='md:hidden pt-3'>
                    <Image src={pitch2mobile} alt='pitch2mobile' className='aspect-2' />

                </div>

                <div className='pt-4 md:pt-7 flex-row flex md:gap-4 gap-2'>
                    <button type='button' className='bg-customPurple rounded'>
                        <p className="py-2 px-3 text-primaryWhite text-[7px] md:text-xs lg:text-base">
                            Contact us
                        </p>
                    </button>
                    <button type='button' className='bg-primaryWhite rounded'>
                        <p className="py-2 px-3 border-customBlack border-[1px] border-solid 
                rounded text-[7px] md:text-xs lg:text-base">
                            Success story
                        </p>
                    </button>
                </div>
            </div>

            {/* Right Side Screen */}
            <div className='flex-col md:flex md:justify-center md:items-center md:w-[50%] hidden'>
            <div className='pt-8 md:mr-8'>
                    <Image src={pitch2mobile} alt='pitch2mobile' className='md:aspect-1 lg:aspect-1' />

                </div>

            </div>

        </section>
    </div>
    )
}

export default Pitch2