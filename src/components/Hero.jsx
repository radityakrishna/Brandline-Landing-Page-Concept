import Image from 'next/image';
import { heroimage } from '../assets';
import { AiFillStar } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='bg-heroBlue w-full h-full md:px-6 lg:px-8 xl:px-10 py-3 flex-col md:flex-row flex '>

      {/*Big Screen Layout*/}


      {/*Description Section*/}
      <div className='md:flex md:flex-col md:justify-start md:items-start md:w-[50%] md:px-6 lg:px-8 xl:px-10 md:py-4 hidden md:visible'>
        <div className='bg-[#E5E8FF] rounded-t-lg rounded-br-lg md:mt-2 lg:mt-6 xl:mt-9'>
          <p className='text-[10px] text-customPurple font-sora p-[2px] md:px-2 md:pt-1'>
            👋 Hello! We are Brandline!
          </p>
        </div>
        <div className='lg:pt-3 md:pt-[5px] md:leading-none'>
          <h1 className='md:font-semibold lg:text-5xl md:text-4xl xl:text-7xl md:tracking-tight'>
            Helps all kind of
          </h1>
          <h1 className='md:font-semibold lg:text-5xl md:text-4xl xl:text-7xl md:tracking-tight'>
            eCommerce brands
          </h1>
          <h1 className='md:font-semibold lg:text-5xl md:text-4xl xl:text-7xl md:tracking-tight'>
            grow and flourish
          </h1>
        </div>

        <div className='md:pt-3 lg:pt-5 xl:pt-7 xl:mr-16 lg:pr-12 md:pr-6'>
          <p className='text-customBlack/90 md:text-[10px] lg:text-base xl:text-lg'>
            Full service digital marketing, branding, consulting and creative agency with the mission of launching and scaling direct to consumer brands.
          </p>
        </div>
        <div className='md:pt-3 lg:pt-5 flex-row flex md:gap-4 gap-2'>
          <button type='button' className='bg-customPurple rounded'>
            <p className="py-2 px-3 text-primaryWhite text-[7px] md:text-xs lg:text-base">
              Get started
            </p>
          </button>
          <button type='button' className='bg-primaryWhite rounded'>
            <p className="py-2 px-3 border-customBlack border-[1px] border-solid 
                rounded text-[7px] md:text-xs lg:text-base">
              Learn more
            </p>
          </button>
        </div>

        <div className='md:pt-3 lg:pt-5'>
          <div className='flex flex-row items-start justify-start'>
            <p className='md:text-[10px] lg:text-xs xl:text-sm font-medium'>
              4.9
            </p>
            <div className='flex flex-row xl:pt-[5px] lg:pt-[3px] md:pt-[2px] px-[2px]'>
            <AiFillStar size={12}  />
            <AiFillStar size={12} />
            <AiFillStar size={12}  />
            <AiFillStar size={12}  />
            <AiFillStar size={12}  />
            </div>
            <p className='md:text-[10px] lg:text-xs xl:text-sm font-medium pl-1'>
              401K+ Ratings
            </p>
          </div>
        </div>
      </div>


      {/*Image Section*/}
      <motion.div
       initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay: 1.5, duration: 3 }} 
       className='md:flex md:justify-center md:items-center md:w-[50%] hidden md:visible'>
        <Image src={heroimage} alt='heroimage' className='md:h-[120%]' />
      </motion.div>


      {/*Mobile Screen Layout*/}
      <div className='md:hidden flex flex-col justify-center items-center'>
        
      <div className='md:hidden bg-[#E5E8FF] rounded-t-lg rounded-br-lg w-28'>
          <p className='text-[8px] text-customPurple p-[2px] pt-1'>
            👋 Hello! We are Brandline!
          </p>
        </div>
        <div className='md:hidden pt-3 leading-none items-center flex flex-col justify-center'>
          <h1 className='text-xl font-semibold tracking-tight'>
            Helps all kind of eCommerce
          </h1>
          <h1 className='text-xl font-semibold tracking-tight'>
            brands grow and flourish
          </h1>
        </div>
        <div className='md:hidden flex justify-center'>
        <Image src={heroimage} alt='heroimage' className='h-[80%] w-[90%]' />
      </div>
      <div className='md:hidden px-10'>
          <p className='text-customBlack/90 text-[9px] text-center'>
            Full service digital marketing, branding, consulting and creative agency with the mission of launching and scaling direct to consumer brands.
          </p>
        </div>
        <div className='md:hidden pt-2 flex-row flex gap-2'>
          <button type='button' className='bg-customPurple rounded'>
            <p className="py-2 px-3 text-primaryWhite text-[7px]">
              Get started
            </p>
          </button>
          <button type='button' className='bg-primaryWhite rounded'>
            <p className="py-2 px-3 border-customBlack border-[1px] border-solid 
                rounded text-[7px]">
              Learn more
            </p>
          </button>
        </div>
        
        

      </div>

    </section>

  )
}

export default Hero