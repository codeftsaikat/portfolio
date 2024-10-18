import { navLinks } from '@/constant/constant';
import React from 'react'
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';

// props type
type Props = {
  showNav: boolean;
  closeNav:()=>void;

}
const MobileNav = ({showNav,closeNav}:Props) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'
  return (
    <div>
      {/* overlay */}
      <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] opacity-90 w-full h-screen`}>
         <div className={`text-white ${navOpen} transform transition-all duration-500 delay-200 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-black space-y-6 z-[10000]`}>
          {/* links */}
         {navLinks.map((navLink) => {
              return (
                <Link href={navLink.url} key={navLink.id}>
                  <p className="nav__links text-[20px] ml-12 border-b-[1.2px] pb-2 border-white sm:text-[25px]">{navLink.label}</p>
                </Link>
              );
            })}
            {/* closer button */}
            <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8 text-white'/>
         </div>
      </div>
    </div>
  )
}

export default MobileNav