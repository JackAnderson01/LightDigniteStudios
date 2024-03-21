import React from "react";
import WhatWeDoStats from "./WhatWeDoStats";
import WhatWeDoServices from "./WhatWeDoServices";

const WhatWeDo = () => {
  return (
    <div className="w-full h-auto  py-14   px-6 lg:px-8 xl:px-48 flex  flex-col  gap-12 justify-start  items-center">
      <WhatWeDoStats />
      <WhatWeDoServices />
    </div>
  );
};

export default WhatWeDo;
