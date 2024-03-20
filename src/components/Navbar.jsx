import React, { useContext, useState } from "react";
import { Logo } from "../assets/export";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";
import NavbarModal from "./NavbarModal";
import { GlobalContext } from "../utils/GlobalContext";

const Navbar = () => {
  const { isOpen, setIsOpen, navigateTo } = useContext(GlobalContext);
  return (
    <div
      id="mynav"
      className="w-full h-16 lg:h-24 bg-transparent z-50 flex justify-between items-center  sticky top-0 left-0"
    >
      <Link to="/">
        <img src={Logo} className="w-28" />
      </Link>

      <div className="w-auto mx-auto hidden lg:flex justify-start items-center h-full lg:gap-6 xl:gap-8 ">
        <button
          onClick={() => navigateTo("services")}
          className="text-sm font-semibold text-black bg-transparent border-none outline-none"
        >
          Services
        </button>
        <button
          onClick={() => navigateTo("work")}
          className="text-sm font-semibold text-black bg-transparent border-none outline-none"
        >
          Work
        </button>
        <button
          onClick={() => navigateTo("faq")}
          className="text-sm font-semibold text-black bg-transparent border-none outline-none"
        >
          Faq
        </button>
        <button
          onClick={() => navigateTo("testimonial")}
          className="text-sm font-semibold text-black bg-transparent border-none outline-none"
        >
          Testimonials
        </button>
        <Link
          to="/contact-us"
          className="text-sm font-semibold text-black bg-transparent border-none outline-none"
        >
          Contact
        </Link>
      </div>
      <div className="w-auto flex gap-6 justify-start items-center">
        <span className="hidden w-auto h-auto text-black lg:flex justify-center items-center gap-2">
          <FaPhone className="text-sm " />
          <span className="text-xs font-semibold">866-978-2220</span>
        </span>
        <Link
          to="/contact-us"
          className="cursor-pointer w-32 lg:w-40 h-8 lg:h-10 rounded-full flex justify-center items-center bg-gradient-to-r from-[#f15c20] to-[#e00e2dd8] transition-all duration-200 hover:opacity-90 uppercase outline-none border-none text-white text-[12px] lg:text-[13px] font-semibold"
        >
          Get a Quote
        </Link>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer w-auto  lg:hidden rounded-md flex justify-center items-center transition-all duration-200 hover:opacity-90 uppercase outline-none border-none text-black text-[12px] lg:text-[16px] font-bold"
        >
          <HiMenuAlt3 className="text-3xl" />
        </button>
      </div>
      <NavbarModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
