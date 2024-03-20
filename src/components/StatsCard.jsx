import React from "react";

const StatsCard = ({ count, text }) => {
  return (
    <div className="w-full lg:w-1/2 bg-white shadow-md hover:shadow-sm transition-all duration-150 rounded-lg p-4 hover:shadow-[#f68e33] text-black flex justify-center items-center flex-col gap-2">
      <span className="text-5xl font-bold">{count}+</span>
      <span className="text-xl font-bold">{text}</span>
    </div>
  );
};

export default StatsCard;
