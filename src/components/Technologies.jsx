import React, { useState } from "react";
import { RiAppleFill } from "react-icons/ri";
import { DiAndroid, DiNodejs } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoFlutter } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMicrosoftazure, SiTypescript } from "react-icons/si";
import {
  FaAws,
  FaCss3,
  FaDigitalOcean,
  FaHtml5,
  FaLinode,
  FaPython,
  FaShopify,
  FaWordpress,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPhp } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";

const Technologies = () => {
  const [currentTab, setCurrentTab] = useState("mobile");
  const detailObj = {
    mobile: [
      {
        icon: <RiAppleFill />,
        text: "IOS",
      },
      {
        icon: <DiAndroid />,
        text: "Android",
      },
      {
        icon: <TbBrandReactNative />,
        text: "React Native",
      },
      {
        icon: <BiLogoFlutter />,
        text: "Flutter",
      },
    ],
    frontend: [
      {
        icon: <IoLogoJavascript />,
        text: "Javascript",
      },
      {
        icon: <SiTypescript />,
        text: "TypeScript",
      },
      {
        icon: <TbBrandReactNative />,
        text: "React",
      },
      {
        icon: <FaHtml5 />,
        text: "Html5",
      },
      {
        icon: <FaCss3 />,
        text: "CSS",
      },
      {
        icon: <SiTailwindcss />,
        text: "Tailwind",
      },
    ],
    database: [
      {
        icon: <DiMongodb />,
        text: "Mongodb",
      },
      {
        icon: <SiMysql />,
        text: "MySql",
      },
      {
        icon: <IoLogoFirebase />,
        text: "Firebase",
      },
      {
        icon: <BiLogoPostgresql />,
        text: "PostgreSql",
      },
    ],
    backend: [
      {
        icon: <DiNodejs />,
        text: "NodeJS",
      },
      {
        icon: <SiPhp />,
        text: "Php",
      },
      {
        icon: <FaPython />,
        text: "Python",
      },
    ],
    cms: [
      {
        icon: <FaWordpress />,
        text: "Wordpress",
      },
      {
        icon: <FaShopify />,
        text: "Shopify",
      },
    ],
    devops: [
      {
        icon: <FaAws />,
        text: "Aws",
      },
      {
        icon: <FaDigitalOcean />,
        text: "Digital Ocean",
      },
      {
        icon: <SiMicrosoftazure />,
        text: "Azure",
      },
      {
        icon: <SiGooglecloud />,
        text: "Google Cloud",
      },
      {
        icon: <FaLinode />,
        text: "Linode",
      },
    ],
  };

  return (
    <div className="w-full h-auto flex flex-col gap-10   justify-start items-center py-4 lg:py-10 px-4 lg:px-8 xl:px-48 ">
      <h1 className="text-[46px] md:text-[50px] md:text-center lg:text-left font-extrabold text-black leading-tight">
        Technologies We <span className="text-[#dd1b38]">Work</span> With
      </h1>

      <div className="w-full h-auto  flex flex-col gap-2 justify-start items-start">
        <div className="w-full h-auto lg:h-16 flex flex-wrap lg:flex-nowrap gap-2 justify-center items-start">
          <button
            onClick={() => setCurrentTab("mobile")}
            className={`lg:w-[12%] w-[48%] md:w-[32%]  h-16 lg:h-full ${
              currentTab == "mobile" ? "border-b text-[#f1c036]" : "text-black"
            } hover:border-b border-[#f1c036]  text-lg flex justify-center items-center`}
          >
            Mobile
          </button>
          <button
            onClick={() => setCurrentTab("frontend")}
            className={`lg:w-[12%] w-[48%] md:w-[32%]  h-16 lg:h-full ${
              currentTab == "frontend"
                ? "border-b text-[#f1c036]"
                : "text-black"
            } hover:border-b border-[#f1c036] text-black text-lg flex justify-center items-center`}
          >
            Frontend
          </button>
          <button
            onClick={() => setCurrentTab("database")}
            className={`lg:w-[12%] w-[48%] md:w-[32%]  h-16 lg:h-full ${
              currentTab == "database"
                ? "border-b text-[#f1c036]"
                : "text-black"
            } hover:border-b border-[#f1c036] text-black text-lg flex justify-center items-center`}
          >
            Database
          </button>
          <button
            onClick={() => setCurrentTab("backend")}
            className={`lg:w-[12%] w-[48%] md:w-[32%]  h-16 lg:h-full ${
              currentTab == "backend" ? "border-b text-[#f1c036]" : "text-black"
            } hover:border-b border-[#f1c036] text-black text-lg flex justify-center items-center`}
          >
            Backend
          </button>
          <button
            onClick={() => setCurrentTab("cms")}
            className={`lg:w-[12%] w-[48%] md:w-[32%]  h-16 lg:h-full ${
              currentTab == "cms" ? "border-b text-[#f1c036]" : "text-black"
            } hover:border-b border-[#f1c036] text-black text-lg flex justify-center items-center`}
          >
            CMS
          </button>
          <button
            onClick={() => setCurrentTab("devops")}
            className={`lg:w-[12%] w-[48%] md:w-[32%]  h-16 lg:h-full ${
              currentTab == "devops" ? "border-b text-[#f1c036]" : "text-black"
            } hover:border-b border-[#f1c036] text-black text-lg flex justify-center items-center`}
          >
            Infra and devops
          </button>
        </div>
        <div className="w-full h-auto transition-all duration-100 flex gap-8 lg:gap-0 justify-center px-4 py-10 items-start flex-wrap">
          {detailObj[currentTab].map((item, key) => {
            return (
              <div
                key={key}
                className="w-32 transition-all duration-150 h-auto flex flex-col justify-center items-center gap-3"
              >
                <span className="text-5xl text-black">{item.icon}</span>
                <span className="text-xs font-semibold text-black">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
