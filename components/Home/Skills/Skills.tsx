import SectionHeading from '@/components/Helper/SectionHeading'
import { skillsData } from '@/Data/data'
import React from 'react'
import SkillCard from './SkillCard/SkillCard'

const Skills = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
        <SectionHeading>My Skills</SectionHeading>
        <div className='mt-20 w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-6'>
         {skillsData.map(skill=>{
          return(
            <div key={skill.id}>
              {/* skill card */}
             <SkillCard skill={skill}/>
            </div>
          )
         })}
        </div>
    </div>
  )
}

export default Skills