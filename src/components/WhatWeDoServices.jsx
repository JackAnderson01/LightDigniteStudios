import React from "react";
import ServicesCard from "./ServicesCard";

const WhatWeDoServices = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-center mt-4 gap-4">
      <span className="text-3xl text-[#dd1b38] font-medium">
        App Development Services
      </span>
      <h1 className="text-[46px] md:text-[53px] md:text-center lg:text-left font-bold text-black leading-tight">
        We Build Apps That{" "}
        <span className="text-[#dd1b38]">Exceeds Expectations.</span>{" "}
      </h1>
      <span className="w-full h-[1px] bg-black rounded-full" />
      <span className="w-[70%] text-center text-lg text-gray-900">
        We provide exceptional mobile app development services. We have
        successfully created mobile apps for businesses across a wide range of
        industries, from fintech to e-commerce.
      </span>

      <div className="w-full grid gap-4 md:gap-8 lg:gap-12 mt-4 grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>

      <button className=" cursor-pointer w-auto px-6 h-14 mt-2 flex justify-center items-center border-none outline-none rounded-full bg-black hover:bg-gradient-to-r from-[#f15c20] to-[#e00e2dd8] text-[14px] capitalize hover:opacity-85 text-white font-semibold ">
        Book your free discover call
      </button>
    </div>
  );
};

export default WhatWeDoServices;
