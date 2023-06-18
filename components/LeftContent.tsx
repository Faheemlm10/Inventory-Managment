import React from "react";
import bgImage from "../images/LeftContent.svg";

import Image from "next/image";

const LeftContent = () => {
  return (
    <div className=" relative w-[50%] overflow-x-hidden h-[100vh]">
      <Image
        src={bgImage}
        alt="bgImage"
        className="w-[100%] h-[100%] object-cover"
      />
      <div className="absolute top-[40%] left-[30%] text-[2rem] font-bold text-white">Inventory System</div>
    </div>
  );
};

export default LeftContent;
