import { partners } from "../constants";
import Image from 'next/image';


const FreeCall = () => {
  return (
    <div className='bg-heroBlue h-full w-full md:px-6 lg:px-8 xl:px-10 py-4'>

      {/*Text */}
      <div className='items-center flex-col flex justify-center'>
        
          <div className="bg-white mt-6 mb-3">
          <p className="px-1 text-center text-customPurple text-[9px] md:text-xs lg:text-base">04 - WE&apos;RE ON MEDIA</p>
          </div>
          <div>
        <div className="flex-col flex justify-center items-center pt-1">
        <p className="text-customBlack font-medium md:text-2xl xl:text-4xl">&quot;The ultimate team to help you</p>
        <p className="text-customBlack font-medium mt-0 md:text-2xl xl:text-4xl">grow. Simple as that.&quot;</p>
        </div>

        <div className="mt-3 leading-3 flex-col flex justify-center items-center">
        <p className="text-[9px] md:text-xs lg:text-base text-customBlack/50 ">Loved by 100&apos;s of brands in the direct to </p>
        <p className="text-[9px] md:text-xs lg:text-base text-customBlack/50 ">consumer space </p>
        </div>

      </div>

      {/*Client Logo */}     
      <div className='flex flex-row items-center justify-between'>
        {partners.map((partner => (
          <div key={partner.id} className='px-2 md:px-4' >
            <Image src={partner.logo} alt='partnerlogo' className="w-14 h-14 md:h-28 md:w-28 lg:h-36 lg:w-36" />
          </div>
        )))}
      </div>
      <div className="pb-9">
        <button type="button" className="bg-customPurple rounded">
          <p className="py-2 px-3 text-primaryWhite text-[7px] md:text-xs lg:text-base">
            Book a free call now
          </p>
        </button>
      </div>
      </div>
      

 
    </div>
  )
}

export default FreeCall