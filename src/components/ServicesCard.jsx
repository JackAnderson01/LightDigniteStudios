import React from "react";
import { RxCaretRight } from "react-icons/rx";

const ServicesCard = ({ services }) => {
  return (
    <div className="group w-full bg-[#dd1b36] text-white lg:bg-white shadow-md hover:bg-[#dd1b36] hover:text-white transition-all duration-500 rounded-lg p-10 lg:text-black flex justify-center items-start flex-col gap-2 relative">
      <span className="absolute top-2 left-2">
        <RxCaretRight className="group-hover:text-white text-4xl -rotate-[136deg] " />
      </span>
      <span className="text-2xl font-bold">{services?.title}</span>
      <span className="text-sm font-medium">{services?.description}</span>
      <span className="absolute bottom-2 right-2">
        <RxCaretRight className="group-hover:text-white text-4xl rotate-[44deg] " />
      </span>
    </div>
  );
};

export default ServicesCard;
