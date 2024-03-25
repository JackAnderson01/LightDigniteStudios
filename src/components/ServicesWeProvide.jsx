import React from "react";
import { IoIosCheckbox } from "react-icons/io";
import TechServiceCard from "./TechServiceCard";

const ServicesWeProvide = () => {
  const arr = [
    {
      title: "Mobile app consulting",
      description:
        "We help finalize app concepts, offer guidance on platform and device compatibility, strategize project activities, and streamline development expenses.",
    },
    {
      title: "Mobile app design",
      description:
        "Our designers craft smooth and user-friendly UX and visually captivating UI to guarantee conversion, engagement, and effortless adoption.",
    },
    {
      title: "Mobile app development",
      description:
        "Our developers specialize in creating and deploying fast, stable, and high-performing mobile apps.successfully implemented projects, our track record speaks for itself.",
    },
    {
      title: "Web development",
      description:
        "Dignite Studios is prepared to complement your mobile app with a web app, web portal, or online store.",
    },
    {
      title: "Mobile app integration",
      description:
        "Proficient in a diverse array of APIs, we ensure seamless integration with backends and any third-party software.",
    },
    {
      title: "Maintenance and support",
      description:
        "Dignite Studios provides post-launch support, compliance, security, performance management, and app evolution services.",
    },
  ];
  return (
    <div
      id="services"
      className="w-full h-auto  flex flex-col justify-start items-start  py-6 lg:py-10 px-6 lg:px-8 xl:px-48 "
    >
      <div className="w-full h-auto  py-14 lg:py-4 flex lg:flex-row flex-col  gap-10 justify-start lg:justify-between items-center ">
        <div className="w-full lg:w-2/3 h-auto flex flex-col justify-start md:items-center lg:items-start items-start gap-6">
          <div className="flex flex-col gap-2 justify-start md:items-center lg:items-start items-start">
            <span className="text-2xl text-[#dd1b38] font-medium">
              Services We Provide
            </span>
            <h1 className="text-[46px] md:text-[53px] md:text-center lg:text-left font-extrabold text-black leading-tight">
              Our Mobile Application <br />{" "}
              <span className="text-[#dd1b38]">Development Services</span>
            </h1>
            <span className="w-full md:w-[50%] h-[1px] bg-black rounded-full" />
          </div>
        </div>
      </div>
      <div className="w-full mt-6 grid gap-6 lg:gap-12 grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
        {arr?.map((service, key) => {
          return <TechServiceCard service={service} key={key} />;
        })}
      </div>
    </div>
  );
};

export default ServicesWeProvide;
