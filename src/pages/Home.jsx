import React from "react";
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
  return (
    <div className="w-full h-auto overflow-y-auto overflow-x-hidden flex flex-col justify-start items-start">
      <Hero />
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
