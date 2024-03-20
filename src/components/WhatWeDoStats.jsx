import React from "react";
import StatsCard from "./StatsCard";

const WhatWeDoStats = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
      <h1 className="text-[46px] md:text-[50px] md:text-center lg:text-left font-extrabold text-black leading-tight">
        Dedicated <span className="text-[#dd1b38]">Custom Mobile App </span>{" "}
        Developers.
      </h1>
      <span className="w-full h-[1px] bg-black rounded-full" />
      <span className="text-lg text-gray-900">
        Celect Studios specializes in creating bespoke mobile applications that
        are tailored to your business needs. We offer cutting-edge custom mobile
        app development solutions that are optimized for performance, user
        experience, and scalability.
      </span>

      <div className="w-full mt-4 flex flex-col md:flex-row justify-start items-center gap-4">
        <StatsCard count={760} text={"Deployed Apps"} />
        <StatsCard count={200} text={"Worldwide Clients"} />
      </div>
    </div>
  );
};

export default WhatWeDoStats;
