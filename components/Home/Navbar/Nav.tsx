'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

// define props ty

type Props = {
  openNav:()=>void
}

const Nav = ({openNav}:Props) => {
  const [navBg,setNavBg] = useState(false);
  useEffect(()=>{
    const handler = () =>{
      if (window.scrollY>=90) {
        setNavBg(true)
      } else if (window.scrollY<90) {
        setNavBg(false)
      }
    }
   window.addEventListener('scroll',handler)
   return()=>{
    window.removeEventListener('scroll',handler)
   }
  },[])
  return (
    <div className={`fixed ${navBg ? 'bg-[#243b39]' : 'fixed'} h-[12vh] z-[10] w-full transition-all duration-200`}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <Image
          src="/images/logo.png"
          width={170}
          height={170}
          alt="logo"
          className="ml-[-1.5rem] sm:ml-0"
        />
        <div className="flex items-center space-x-10">
          {/* nav links */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((navLink) => {
              return (
                <Link href={navLink.url} key={navLink.id}>
                  <p className="nav__links">{navLink.label}</p>
                </Link>
              );
            })}
          </div>
          {/* button */}
          <div className="flex items-center space-x-4">
           <button className="px-8 py-3 md:px-10 md:py-3 text-blue-800 font-semibold sm:text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">Hire Me</button>

           {/* burger */}
           <HiBars3BottomRight onClick={openNav} className="h-8 w-8 cursor-pointer text-white lg:hidden"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
