import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaDownLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      <div className="flex justify-center flex-col h-full w-4/5 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/*content*/}
          <div>
            {/* sub heading */}
            <h1 
            data-aos='fade-left'
            className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold">
              I am {BaseInfo.name}
            </h1>
            {/* title */}
            <h1 
            data-aos='fade-right' data-aos-delay='100'
            className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-5 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
              {BaseInfo.position}
            </h1>
            {/* description */}
            <p 
             data-aos='fade-left' data-aos-delay='200'
            className="mt-6 text-white text-sm md:text-base text-opacity-60">
              {BaseInfo.description}
            </p>
            <button 
             data-aos='zoom-in' data-aos-delay='300'
            className="text-white flex space-x-2 items-center md:px-8 md:py-2.5 px-6 py-1.5 font-semibold text-sm md:text-lg bg-blue-700 hover:bg-blue-900 mt-8 rounded-lg transition-all duration-200">
              <span>Download CV</span>
              <FaDownLong />
            </button>
          </div>
          {/*image*/}
          <div 
           data-aos='zoom-in' data-aos-delay='400'
          className="border-[3.5px] border-blue-950 overflow-x-hidden rounded-[3rem] mx-auto">
            <Image
              src={BaseInfo.profilePic}
              alt="profile image"
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
