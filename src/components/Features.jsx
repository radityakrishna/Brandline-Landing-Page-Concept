import { benefits } from "../constants"
import FeatureCard from "./FeatureCard"

const Features = () => {
    return (
        <div className='bg-primaryWhite h-full w-full md:py-20 py-10'>
            {/*Text */}
            <div className='items-center flex-col flex justify-center'>
                <div className='bg-[#E5E8FF] mt-3 rounded-t rounded-br'>
                    <p className='text-[10px] text-customPurple p-[2px] md:px-2 md:pt-1 tracking-widest'>
                        FEATURES
                    </p>
                </div>
                <div className="flex-col flex justify-center items-center md:pt-5 pt-1">
                    <p className="md:text-3xl lg:text-4xl xl:text-5xl text-xl text-customBlack justify-center font-medium">All you need to run your brands</p>
                    <p className="md:text-3xl lg:text-4xl xl:text-5xl text-xl text-customBlack justify-center font-medium">effectively</p>
                </div>
            </div>
            {/*Text */}
            <div className='flex items-center justify-center flex-col md:flex-row md:pt-16 pt-8'>
                {benefits.map((card)=>(
                    <FeatureCard key={card.id} {...card} />
                ))}
            </div>
        </div>
    )
}

export default Features