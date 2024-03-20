import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/export";

const Footer = () => {
  return (
    <footer className="w-full h-auto px-6 lg:px-8 bg-[#dd1b36]">
      <div className="w-full  mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-16" alt="Flowbite Logo" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-bold text-white sm:mb-0 ">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-[#fdfdfd] sm:mx-auto lg:my-8" />
        <span className="block text-sm text-white sm:text-center ">
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
