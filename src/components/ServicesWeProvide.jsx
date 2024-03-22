import React from "react";
import { IoIosCheckbox } from "react-icons/io";
import TechServiceCard from "./TechServiceCard";

const ServicesWeProvide = () => {
  return (
    <div
      id="services"
      className="w-full h-auto  flex flex-col justify-start items-start  py-6 lg:py-10 px-6 lg:px-8 xl:px-48 "
    >
      <div className="w-full h-auto  py-14 lg:py-4 flex lg:flex-row flex-col  gap-10 justify-start lg:justify-between items-center ">
        <div className="w-full lg:w-2/3 h-auto flex flex-col justify-start md:items-center lg:items-start items-start gap-6">
          <div className="flex flex-col gap-2 justify-start md:items-center lg:items-start items-start">
            <span className="text-2xl text-[#dd1b38] font-medium">
              Services We Provide
            </span>
            <h1 className="text-[46px] md:text-[53px] md:text-center lg:text-left font-extrabold text-black leading-tight">
              Our Mobile Application <br />{" "}
              <span className="text-[#dd1b38]">Development Services</span>
            </h1>
            <span className="w-full md:w-[50%] h-[1px] bg-black rounded-full" />
          </div>
        </div>
      </div>
      <div className="w-full mt-6 grid gap-6 lg:gap-12 grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
        <TechServiceCard />
        <TechServiceCard />
        <TechServiceCard />
        <TechServiceCard />
        <TechServiceCard />
        <TechServiceCard />
      </div>
    </div>
  );
};

export default ServicesWeProvide;
