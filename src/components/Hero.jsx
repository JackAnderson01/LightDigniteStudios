import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";

const Hero = ({ isScrolled }) => {
  return (
    <div
      id="hero"
      className="w-full h-auto image-bg flex flex-col justify-start items-start image-bg py-2 lg:py-0 px-6 lg:px-8 xl:px-48 "
    >
      <Navbar isScrolled={isScrolled} />
      <HeroContent />
    </div>
  );
};

export default Hero;
