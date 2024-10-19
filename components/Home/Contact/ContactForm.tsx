import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-[#140c1c] p-4 sm:p-10 rounded-lg'>
        <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>Let&apos;s work together!</h1>
        <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat architecto facilis, itaque libero voluptas suscipit?</p>

        {/* input field */}
        <form className='mt-8 block w-full overflow-hidden'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
                <input
                 type="text" 
                 placeholder='First Name' 
                 className='flex-1 bg-black text-white placeholder:text-gray-200 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
                 />
                <input
                 type="text" 
                 placeholder='Last Name' 
                 className='flex-1 bg-black text-white placeholder:text-gray-200 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
                 />
            </div>
        </form>
    </div>
  )
}

export default ContactForm