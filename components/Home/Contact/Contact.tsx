import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const Contact = () => {
  return (
    <div className='bg-[#050705] pt-16 pb-16'>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 w-[80%] mx-auto items-center mt-10">
              {/* contact form */}
              <div>
                <ContactForm/>
              </div>
              {/* contact-info */}
              <div>
                <ContactInfo/>
              </div>
        </div>
    </div>
  )
}

export default Contact