import React from "react";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";

const Home = () => {
  return (
    <div className="w-full h-auto overflow-y-auto overflow-x-hidden flex flex-col justify-start items-start">
      <Hero />
      <WhatWeDo />
    </div>
  );
};

export default Home;
