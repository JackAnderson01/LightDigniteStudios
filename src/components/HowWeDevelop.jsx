import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { HowDevelop } from "../assets/export";

const HowWeDevelop = () => {
  return (
    <div className="w-full h-auto  flex flex-col justify-start items-start  py-2 lg:py-4 px-6 lg:px-8 xl:px-48">
      <div className="w-full h-auto  py-14 lg:py-4 flex lg:flex-row flex-col  gap-10 justify-start lg:justify-between items-center ">
        <div className="w-full lg:w-1/2 h-auto flex justify-end items-center relative">
          <img src={HowDevelop} className="drop-shadow-xl" />
        </div>

        <div className="w-full lg:w-1/2 h-auto flex flex-col justify-start md:items-center lg:items-start items-start gap-6">
          <div className="flex flex-col gap-2 justify-start md:items-center lg:items-start items-start">
            <span className="text-2xl text-[#dd1b38] font-medium">
              Benefits
            </span>
            <h1 className="text-[46px] md:text-[50px] md:text-center lg:text-left font-extrabold text-black leading-tight">
              How Do We Develop
              <br />{" "}
              <span className="text-[#dd1b38]">Custom Applications?</span>
            </h1>
            <span className="text-gray-600 text-[16px] md:text-lg md:text-center lg:text-left font-medium">
              Get your dream app developed by a talented and highly skilled team
              of professionals who work collectively to provide top-notch custom
              mobile app development services for you. We are highly proficient
              in engineering custom-built systems. Our developers and experts
              use the most advanced technologies and equipment to create
              tailored frameworks to make sure that the developed app is
              created, focusing on the client’s perceptions. Our developers put
              their efforts into crafting effective and efficient solutions,
              resulting in bug-free and user-friendly apps.
            </span>
          </div>
          <button className=" cursor-pointer w-auto px-6 h-12 flex justify-center items-center border-none outline-none rounded-full bg-black hover:bg-gradient-to-r from-[#f15c20] to-[#e00e2dd8] capitalize text-[14px] hover:opacity-85 text-white font-semibold ">
            Schedule A Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowWeDevelop;
