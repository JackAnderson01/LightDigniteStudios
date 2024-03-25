import React from "react";
import { Ios } from "../assets/export";

const TechServiceCard = ({ service }) => {
  return (
    <div className="group w-full h-auto rounded-lg flex flex-col justify-start items-start gap-4">
      <span className="w-20 h-20 group-hover:scale-110 rounded-full border border-[#000] flex items-center justify-center">
        <img src={Ios} />
      </span>
      <div className="w-auto flex flex-col gap-1 justify-start items-start">
        <span className="text-xl text-gray-800 font-bold">
          {service?.title}
        </span>
        <span className="text-lg font-normal">{service?.description}</span>
      </div>
    </div>
  );
};

export default TechServiceCard;
