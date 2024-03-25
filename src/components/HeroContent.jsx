import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="w-full h-auto min-h-[calc(100vh)] py-20 lg:py-4 flex lg:flex-row flex-col  gap-10 justify-start lg:justify-between items-center ">
      <div className="w-full lg:w-1/2 h-auto flex flex-col justify-start md:items-center lg:items-start items-start gap-6">
        <div className="flex flex-col gap-2 justify-start md:items-center lg:items-start items-start">
          <h1 className="text-[46px] md:text-[50px] md:text-center lg:text-left font-bold text-black leading-tight">
            Mobile App <br />{" "}
            <span className="text-[#dd1b38]">Development Solutions</span>
          </h1>
          <span className="text-gray-600 text-[16px] md:text-lg md:text-center lg:text-left font-medium">
            Established in the realm of mobile development in 2020, <br />{" "}
            Dignite Studios specializes in crafting native, cross-platform, and
            progressive web applications.
            <br /> Our focus lies in delivering stable performance, user-centric
            design,
            <br /> and a distinctive value proposition to help your app shine in
            a competitive market.
          </span>
        </div>
        <Link
          to="/contact-us"
          className=" cursor-pointer w-auto px-6 h-12 flex justify-center items-center border-none outline-none rounded-full bg-gradient-to-r from-[#f15c20] to-[#e00e2dd8] capitalize text-[14px] hover:opacity-85 text-white font-semibold "
        >
          Get your design ready
        </Link>
        <div className="flex flex-col gap-2 justify-start items-start">
          <div className="w-auto flex gap-2 justify-start items-center">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#f15c20]">
              <IoIosCheckmark className="text-xl text-white" />
            </span>
            <h1 className="text-xl underline underline-offset-4">
              Best Mobile App Development Company In United States
            </h1>
          </div>
          <div className="w-auto flex gap-2 justify-start items-center">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#f15c20]">
              <IoIosCheckmark className="text-xl text-white" />
            </span>
            <h1 className="text-xl underline underline-offset-4">
              Affordable Mobile App Development Services
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-auto flex justify-end items-center relative">
        <div className="w-full lg:w-[70%] h-auto rounded-3xl z-10 bg-gradient-to-r from-[#f15c20] to-[#e00e2dd8] flex flex-col gap-4 justify-start items-start p-6">
          <span className="text-2xl font-bold text-white">GET IN TOUCH</span>
          <input
            type="text"
            placeholder="Name"
            className="w-full h-10 rounded-full bg-transparent outline-none px-4 border border-white text-white placeholder:text-white"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full h-10 rounded-full bg-transparent outline-none px-4 border border-white text-white placeholder:text-white"
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full h-10 rounded-full bg-transparent outline-none px-4 border border-white text-white placeholder:text-white"
          />
          <textarea
            type="text"
            placeholder="Message"
            className="w-full h-36 resize-none rounded-2xl bg-transparent outline-none p-2 border border-white text-white placeholder:text-white"
          ></textarea>
          <button className="w-[30%] h-10 rounded-full  outline-none px-4 bg-[#fff] font-medium text-[#dd1b36] placeholder:text-white">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
