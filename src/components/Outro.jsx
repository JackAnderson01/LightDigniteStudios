import React from "react";

const Outro = () => {
  return (
    <div
      id="hero"
      className="w-full h-auto bg-image flex flex-col justify-start items-start  py-8 lg:py-12 px-6 lg:px-8 xl:px-48 "
    >
      <div className="w-full  h-[22rem] flex flex-col justify-start md:items-center lg:items-start items-start gap-6">
        <div className="flex flex-col gap-2 justify-start md:items-center lg:items-start items-start">
          <h1 className="text-[46px] md:text-[50px] md:text-center lg:text-left font-extrabold text-black leading-tight"></h1>
          <h1 className="text-[46px] md:text-[50px] md:text-center lg:text-left font-extrabold text-black leading-tight">
            Join The
            <span className="text-[#dd1b38]">
              {" "}
              Mobile Revolution
              <br />{" "}
            </span>{" "}
            With Our Expert Team <br /> Discuss
          </h1>
          <span className="text-gray-800 text-[12px] md:text-lg md:text-center lg:text-left font-normal">
            Our expert team can help you navigate the complex mobile landscape,
            from <br /> developing a mobile strategy to designing and building a
            mobile app.
          </span>
        </div>
        <div className="w-auto flex gap-2 justify-start items-center">
          <button className=" cursor-pointer w-auto px-6 h-12 flex justify-center items-center border-none outline-none rounded-full bg-gradient-to-r from-[#f15c20] to-[#dd1b36] hover:bg-black capitalize text-[14px]  text-white font-semibold ">
            Hire Our Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Outro;
