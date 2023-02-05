import Image from 'next/image';
import { pitch1mobile } from '../assets';


const Pitch1 = () => {
    return (
        <div className='bg-primaryWhite h-full w-full md:px-6 lg:px-8 xl:px-10 py-3'>
            <section className='flex md:flex-row flex-col items-center justify-between md:px-10 lg:px-16'>

                {/* Left Side Screen */}
                <div className=' flex-col flex md:justify-start md:items-start md:w-[50%] items-center justify-center md:ml-1'>
                    <div className='bg-[#E5E8FF] mt-3 rounded-t rounded-br'>
                        <p className='text-[10px] text-customPurple p-[2px] md:px-2 md:pt-1'>
                            01 - EMAIL OPTIMIZATION
                        </p>
                    </div>
                    <div className='leading-tight pt-3 flex-col flex justify-center items-center md:justify-start md:items-start'>
                        <p className='md:text-3xl lg:text-5xl xl:text-6xl text-xl text-customBlack justify-center font-medium'>
                            Scale up your
                        </p>
                        <p className='md:text-3xl lg:text-5xl xl:text-6xl text-xl text-customBlack justify-center font-medium'>
                            revenue with email
                        </p>
                    </div>
                    {/*Description for Big Screen*/}
                    <div className='md:max-w-[350px] lg:max-w-[550px] md:pt-4 pt-2 leading-2 hidden md:flex'>
                        <p className='text-[#667085] md:text-xs lg:text-base text-[6px]'>We understand the issues and possibilities that come with email marketing. We have a team of experts that understand how to run impactful campaigns. We will handle your lifecycle marketing from A-Z. Start from copywriting to designing</p>
                    </div>
                    {/*Description for Mobile Screen*/}
                    <div className='max-w-[350px] md:pt-4 pt-2 leading-2 flex-col flex md:hidden justify-center items-center'>
                        <p className='text-[#667085] text-[8px]'>
                            We understand the issues and possibilities that come with email marketing.
                        </p>
                        <p className='text-[#667085] text-[8px]'>
                        We have a team of experts that understand how to run impactful campaigns.
                        </p>
                        <p className='text-[#667085] text-[8px]'>
                        We will handle your lifecycle marketing from A-Z.
                        </p>
                        <p className='text-[#667085] text-[8px]'>
                        Start from copywriting to designing.
                        </p>
                    </div>


                    {/*Image for Mobile Screen*/}
                    <div className='md:hidden pt-3'>
                        <Image src={pitch1mobile} alt='pitch1mobile' className='aspect-2' />

                    </div>

                    <div className='pt-4 md:pt-7'>
                        <button type='button' className='bg-customPurple rounded'>
                            <p className="py-2 px-3 text-primaryWhite text-[7px] md:text-xs lg:text-base">
                                Scale your brand now
                            </p>
                        </button>
                    </div>
                </div>

                {/* Right Side Screen */}
                <div className='flex-col md:flex md:justify-center md:items-center md:w-[50%] hidden'>
                <div className='pt-8'>
                        <Image src={pitch1mobile} alt='pitch1mobile' className='md:aspect-1 lg:aspect-1' />

                    </div>

                </div>

            </section>
        </div>
    )
}

export default Pitch1