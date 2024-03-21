import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import HowWeDevelop from "../components/HowWeDevelop";
import ServicesWeProvide from "../components/ServicesWeProvide";
import TechStack from "../components/TechStack";
import Faq from "../components/Faq";
import Technologies from "../components/Technologies";
import Outro from "../components/Outro";
import Footer from "../components/Footer";
import HomeCTO from "../components/HomeCTO";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full h-auto overflow-x-hidden flex flex-col justify-start items-start">
      <Hero isScrolled={isScrolled} />
      <WhatWeDo />
      <HowWeDevelop />
      <ServicesWeProvide />
      <TechStack />
      <Outro />
      <Faq />
      <Technologies />
      <HomeCTO />
      <Footer />
    </div>
  );
};

export default Home;
