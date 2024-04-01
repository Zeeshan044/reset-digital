import React from "react";
import AboutImg from "@/assets/images/about.png";
import Us from "@/assets/images/US.svg";
import Image from "next/image";
const AboutHero = () => {
  return (
    <div className=" dark:text-secondary-light text-body">
      <div className=" text-9xl flex justify-between px-[142px] mt-8 mb-8 ">
        <h1 className="font-medium">ABOUT</h1>
        <div>
          <Image src={Us} alt="" className="w-[300px] h-[120px]" />
        </div>
      </div>
      <div>
        <Image src={AboutImg} alt="" className=" rounded-[30px]" />
      </div>
    </div>
  );
};

export default AboutHero;
