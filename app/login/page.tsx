import React from "react";
import Image from "next/image";
import bgImage from "../../images/Bg.svg";
import LeftContent from "@/components/LeftContent";
import RightContent from "@/components/RightContent";

const login = () => {
  return (
    <div className="flex">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default login;
