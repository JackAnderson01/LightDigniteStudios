import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/export";
import { GlobalContext } from "../utils/GlobalContext";

const Footer = () => {
  const { navigateTo } = useContext(GlobalContext);
  return (
    <footer className="w-full h-auto px-6 lg:px-8 bg-gray-100">
      <div className="w-full  mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-16" alt="Flowbite Logo" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 gap-3 text-sm font-bold text-gray-900 sm:mb-0 ">
            <li
              onClick={() => navigateTo("services")}
              className="text-sm font-semibold cursor-pointer text-black bg-transparent border-none outline-none"
            >
              Services
            </li>
            <li
              onClick={() => navigateTo("tech")}
              className="text-sm font-semibold cursor-pointer text-black bg-transparent border-none outline-none"
            >
              Technologies
            </li>
            <li
              onClick={() => navigateTo("faq")}
              className="text-sm font-semibold cursor-pointer text-black bg-transparent border-none outline-none"
            >
              Faq
            </li>
            <li
              onClick={() => navigateTo("about")}
              className="text-sm font-semibold cursor-pointer text-black bg-transparent border-none outline-none"
            >
              About
            </li>
            <li>
              <Link
                to="/contact-us"
                className="text-sm font-semibold cursor-pointer text-black bg-transparent border-none outline-none"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-[#1c1c1c] sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-900 sm:text-center ">
          Copyright © 2022{" "}
          <Link to="/" className="hover:underline text-[#fac036]">
            Dignite Studios
          </Link>{" "}
          All Right Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
