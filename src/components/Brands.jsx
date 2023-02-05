import Image from 'next/image';
import { clients } from '../constants';
import Marquee from 'react-fast-marquee';

const Brands = () => {
    return (
        <div className='bg-heroBlue h-full w-full'>
            <div className='items-center flex-col flex justify-center'>
                <p className='text-customBlack/60 pt-4 md:pt-0 md:text-xs lg:text-sm text-[9px]'>Trusted by hundreds of progressive brands</p>
                <canvas className='bg-[#D8E3EE] w-full h-[1px] my-3'></canvas>


                <div className='flex flex-row items-center justify-between w-full'>
                    <Marquee direction='right'>
                        {clients.map((client) => (
                            <div key={client.id} className='px-2 md:px-10 lg:px-12 xl:px-16'>
                                <Image src={client.logo} alt='clientlogo' className="w-12 md:w-18 lg:w-28 xl:w-32" />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Brands