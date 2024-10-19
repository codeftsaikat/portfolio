import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import Slider from './Slider/Slider'

const Reviews = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050701]'>
        <SectionHeading>My Skills</SectionHeading>
        <div className='w-[90%] sm:w-[90%] mx-auto mt-20'>
            {/* slider */}
            <Slider/>
        </div>
    </div>
  )
}

export default Reviews