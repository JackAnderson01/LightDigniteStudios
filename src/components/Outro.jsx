import React from "react";
import { Link } from "react-router-dom";

const Outro = () => {
  return (
    <div
      id="outro"
      className="w-full h-auto bg-image flex flex-col justify-start items-start  py-8 lg:py-12 px-6 lg:px-8 xl:px-48 "
    >
      <div className="w-full  h-auto flex flex-col justify-start md:items-center lg:items-start items-start gap-6">
        <div className="flex flex-col gap-2 justify-start md:items-center lg:items-start items-start">
          <h1 className="text-[42px] md:text-[50px] md:text-center lg:text-left font-extrabold text-white leading-tight">
            Embark on the
            <span className="text-[#fac036]">
              {" "}
              Mobile Revolution
              <br />{" "}
            </span>{" "}
            with Our Team of Experts
          </h1>
          <span className="text-gray-100 text-[13px] md:text-lg md:text-center lg:text-left font-normal">
            Navigate the Mobile Landscape with Our Expertise.
            <br /> From formulating a mobile strategy to crafting and developing
            your app, our team is here to guide you every step of the way.
          </span>
        </div>
        <div className="w-auto flex gap-2 justify-start items-center">
          <Link
            to="/contact-us"
            className=" cursor-pointer w-auto px-6 h-12 flex justify-center items-center border-none outline-none rounded-full bg-black hover:bg-gradient-to-r from-[#f15c20] to-[#dd1b36] hover:bg-black capitalize text-[14px]  text-white font-semibold "
          >
            Hire Our Expert
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Outro;
