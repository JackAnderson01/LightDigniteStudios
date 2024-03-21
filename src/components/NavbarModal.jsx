import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../utils/GlobalContext";

const NavbarModal = ({ isOpen, setIsOpen }) => {
  const navbarRef = useRef();

  const toggleModal = (e) => {
    if (!navbarRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const { navigateTo } = useContext(GlobalContext);
  return (
    <div
      onClick={toggleModal}
      className={`${
        isOpen ? "translate-x-0" : "translate-x-full"
      } w-screen h-[calc(100%)]  transition-all duration-200 lg:hidden flex justify-end items-start z-50 fixed top-0 right-0 `}
    >
      <div
        ref={navbarRef}
        className="w-40 h-auto absolute top-[4.5rem] right-2 rounded-md bg-[#fff] shadow-md flex flex-col justify-start items-start py-4 gap-2"
      >
        <button
          onClick={() => navigateTo("services")}
          className=" font-semibold w-full h-8 rounded-sm hover:bg-[#fdfdfd]/[0.9] flex items-center justify-start px-4  text-black text-sm border-none outline-none"
        >
          Services
        </button>
        <button
          onClick={() => navigateTo("tech")}
          className=" font-semibold w-full h-8 rounded-sm hover:bg-[#fdfdfd]/[0.9] flex items-center justify-start px-4  text-black text-sm border-none outline-none"
        >
          Technologies
        </button>
        <button
          onClick={() => navigateTo("faq")}
          className=" font-semibold w-full h-8 rounded-sm hover:bg-[#fdfdfd]/[0.9] flex items-center justify-start px-4  text-black text-sm border-none outline-none"
        >
          Faq
        </button>
        <button
          onClick={() => navigateTo("about")}
          className=" font-semibold w-full h-8 rounded-sm hover:bg-[#fdfdfd]/[0.9] flex items-center justify-start px-4  text-black text-sm border-none outline-none"
        >
          About
        </button>
        <Link
          to="/contact-us"
          className=" font-semibold w-full h-8 rounded-sm hover:bg-[#fdfdfd]/[0.9] flex items-center justify-start px-4  text-black text-sm border-none outline-none"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavbarModal;
