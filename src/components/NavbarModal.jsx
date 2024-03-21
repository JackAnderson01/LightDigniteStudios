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
      ref={navbarRef}
      className={`w-40 h-auto ${
        isOpen ? "flex lg:hidden" : "hidden"
      } absolute top-16 right-0 rounded-md bg-[#fdfdfd] shadow-md  flex-col justify-start items-start py-4 gap-2`}
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
  );
};

export default NavbarModal;
