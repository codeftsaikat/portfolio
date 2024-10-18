import SectionHeading from "@/components/Helper/SectionHeading";
import { servicesData } from "@/data/data";
import React from "react";

const Services = () => {
  return (
    <div className="bg-[#0f0751] pt-16 pb-16">
      <SectionHeading>Services</SectionHeading>
      <div>
        {servicesData.map((service) => {
          return <div key={service.id}></div>;
        })}
      </div>
    </div>
  );
};

export default Services;
