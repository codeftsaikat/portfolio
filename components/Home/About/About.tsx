import SectionHeading from '@/components/Helper/SectionHeading'
import { aboutInfo } from '@/data/data'
import React from 'react'
import { FaCableCar, FaCheck } from 'react-icons/fa6'

const About = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
        {/* section heading */}
        <SectionHeading>About Me</SectionHeading>

        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
            {/* text content */}
            <div>
                <h1 className='text-bg text-gray-200 text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold'>{aboutInfo.title}</h1>
                <p className='text-gray-500 mt-6 text-base'>{aboutInfo.description}</p>
                <div className='mt-8'>
                  <div className='flex items-center space-x-2 mb-6'>
                    <div className='h-7 w-7 bg-blue-700 flex flex-col items-center justify-center'>
                         <FaCheck className='text-white'/>
                    </div>
                  </div>
                </div>
            </div>
            {/* stats content */}
            <div>

            </div>
        </div>
    </div>
  )
}

export default About