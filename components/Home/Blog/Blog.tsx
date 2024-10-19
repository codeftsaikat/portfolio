import SectionHeading from '@/components/Helper/SectionHeading'
import { blogs } from '@/Data/data'
import React from 'react'
import BlogCard from './BlogCard/BlogCard'

const Blog = () => {
  return (
    <div className='bg-[#0f0715] pt-16 pb-16'>
        <SectionHeading>Our Blogs</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-[80%] mx-auto items-center mt-20">
            {
                blogs.map((blog,i)=>{
                   return <div 
                   data-aos="zoom-in"
                   data-aos-anchor-placement="top-center"
                   data-aos-delay={`${i * 150}`}
                   key={blog.id}>
                         {/* blog card */}
                         <BlogCard blog={blog}/>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Blog