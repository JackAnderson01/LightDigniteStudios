import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { HowDevelop } from "../assets/export";
import { Link } from "react-router-dom";

const HowWeDevelop = () => {
  return (
    <div
      id="about"
      className="w-full h-auto   flex flex-col justify-start items-start  py-2 lg:py-4 px-6 lg:px-8 xl:px-48"
    >
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
              Transform Your Ideas into{" "}
              <span className="text-[#dd1b38]">Exceptional Apps</span>
            </h1>
            <span className="text-gray-600 text-[16px] md:text-lg md:text-center lg:text-left font-medium">
              With a passion for innovation and a dedication to excellence, we
              specialize in crafting high-quality mobile applications that stand
              out in the digital landscape. From native to cross-platform
              solutions, our experienced team leverages the latest technologies
              to build apps that deliver exceptional performance and user
              satisfaction. Whether you're a startup looking to disrupt the
              market or an established business seeking to expand your digital
              presence, we're here to help you every step of the way. Ready to
              take the next step? Get in touch with us to discuss your project
              requirements and turn your dreams into successful apps.
            </span>
          </div>
          <Link
            to="/contact-us"
            className=" cursor-pointer w-auto px-6 h-12 flex justify-center items-center border-none outline-none rounded-full bg-black hover:bg-gradient-to-r from-[#f15c20] to-[#e00e2dd8] capitalize text-[14px] hover:opacity-85 text-white font-semibold "
          >
            Contact US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowWeDevelop;
