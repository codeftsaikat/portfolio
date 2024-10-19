import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0f0715] pt-16 pb-16">
      <div>
        <Image src="/images/logo.png" alt="logo" width={180} height={180} className="mx-auto"/>
      </div>
      <div className="flex items-center flex-wrap justify-center space-x-6 font-bold text-white">
         <div>Home</div>
         <div>Service</div>
         <div>Project</div>
         <div>Review</div>
         <div>Contact</div>
      </div>
      <p className="text-white text-opacity-60 mt-5 text-center">
        @ 2024 All Rights Reserved By WebDev Portfolio
      </p>
    </div>
  );
};

export default Footer;
