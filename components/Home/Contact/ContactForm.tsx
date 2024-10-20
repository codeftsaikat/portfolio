import React from 'react'

const ContactForm = () => {
//   return (
//     <div className='bg-[#140c1c] p-4 sm:p-10 rounded-lg'>
//         <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>Let&apos;s work together!</h1>
//         <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat architecto facilis, itaque libero voluptas suscipit?</p>

//         {/* input field */}
//         <form className='mt-8 block w-full overflow-hidden'>
//             <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
//                 <input
//                  type="text" 
//                  placeholder='First Name' 
//                  className='flex-1 bg-black text-white placeholder:text-gray-200 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
//                  />
//                 <input
//                  type="text" 
//                  placeholder='Last Name' 
//                  className='flex-1 bg-black text-white placeholder:text-gray-200 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
//                  />
//             </div>
//             <div className='flex flex-col mt-5 md:flex-row items-center justify-center gap-4'>
//                 <input
//                  type="email" 
//                  placeholder='Email address' 
//                  className='flex-1 bg-black text-white placeholder:text-gray-200 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
//                  />
//                 <input
//                  type="text" 
//                  placeholder='Phone number' 
//                  className='flex-1 bg-black text-white placeholder:text-gray-200 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
//                  />
//             </div>
//             <div>
//                 <select className='text-white bg-black mt-5 w-full placeholder:text-gray-600 px-1 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none'>
//                     <option value="" disabled selected>Select an option</option>
//                     <option value="frontend">Frontend Development</option>
//                     <option value="backend">Backend Development</option>
//                     <option value="fullstack">Fullstack Development</option>
//                 </select>
//             </div>
//             <textarea
//              rows={7} 
//              placeholder='Message' 
//              className='text-white bg-black mt-5 w-full placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none'>
//             </textarea>
//             <div className='mt-5'>
//                  <button className='px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full'>Send Me</button>
//             </div>
//         </form>
//     </div>
//   )
return (
    <div className='bg-[#140c1c] p-4 sm:p-10 rounded-lg'>
      <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>
        Let&apos;s work together!
      </h1>
      <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat architecto facilis, itaque libero voluptas suscipit?
      </p>
  
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
        <div className='flex flex-col mt-5 md:flex-row items-center justify-center gap-4'>
          <input
            type="email"
            placeholder='Email address'
            className='flex-1 bg-black text-white placeholder:text-gray-200 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
          />
          <input
            type="text"
            placeholder='Phone number'
            className='flex-1 bg-black text-white placeholder:text-gray-200 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
          />
        </div>
        <div>
          {/* Fixing the warning by using defaultValue */}
          <select
            defaultValue=""
            className='text-white bg-black mt-5 w-full placeholder:text-gray-600 px-1 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none'
          >
            <option value="" disabled>Select an option</option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Fullstack Development</option>
          </select>
        </div>
        <textarea
          rows={7}
          placeholder='Message'
          className='text-white bg-black mt-5 w-full placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none'
        >
        </textarea>
        <div className='mt-5'>
          <button className='px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full'>
            Send Me
          </button>
        </div>
      </form>
    </div>
  );  
}

export default ContactForm