import React from "react";
import ServicesCard from "./ServicesCard";
import { Link } from "react-router-dom";

const WhatWeDoServices = () => {
  const arr = [
    {
      title: "Enterprise App Development",
      description:
        "At our service, we specialize in crafting tailored apps to meet the unique needs of businesses and organizations. From streamlining employee management to enhancing customer relationship management (CRM) and optimizing inventory management, we provide comprehensive solutions to propel your enterprise forward.",
    },
    {
      title: "Native App Development Solutions",
      description:
        "Harnessing the power of native platforms like iOS (utilizing Swift or Objective-C) and Android (leveraging Java or Kotlin), our team specializes in building high-performance apps tailored to your specific needs. By utilizing platform-specific features, we ensure optimal functionality and user experience for your app across different devices",
    },
    {
      title: "Hybrid App Development Solutions",
      description:
        "With our hybrid app development services, we create apps using web technologies such as HTML, CSS, and JavaScript, wrapped in a native container. This unique approach enables your app to run seamlessly across multiple platforms while still harnessing native features. ",
    },
    {
      title: "Progressive Web App (PWA) Development Solutions",
      description:
        "Our PWA development services leverage modern web capabilities to deliver user experiences akin to native apps. From offline functionality to push notifications and seamless home screen installation, we ensure your web application provides a smooth and engaging experience across various devices and platforms.",
    },
  ];
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start md:items-center mt-4 gap-4">
      <span className="text-3xl text-[#dd1b38] font-medium">
        App Development Services
      </span>
      <h1 className="text-[46px] md:text-[50px] text-left md:text-center lg:text-left font-extrabold text-black leading-tight">
        We Build Apps That{" "}
        <span className="text-[#dd1b38]">Exceeds Expectations.</span>{" "}
      </h1>
      <span className="w-full h-[1px] bg-black rounded-full" />
      <span className="w-[70%] text-left md:text-center text-lg text-gray-900">
        We provide exceptional mobile app development services. We have
        successfully created mobile apps for businesses across a wide range of
        industries, from fintech to e-commerce.
      </span>

      <div className="w-full grid gap-4 md:gap-8 lg:gap-12 mt-4 grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2">
        {arr?.map((services, key) => {
          return <ServicesCard services={services} key={key} />;
        })}
      </div>

      <Link
        to="/contact-us"
        className=" cursor-pointer w-auto px-6 h-14 mt-2 flex justify-center items-center border-none outline-none rounded-full bg-black hover:bg-gradient-to-r from-[#f15c20] to-[#e00e2dd8] text-[14px] capitalize hover:opacity-85 text-white font-semibold "
      >
        Book your free discover call
      </Link>
    </div>
  );
};

export default WhatWeDoServices;
