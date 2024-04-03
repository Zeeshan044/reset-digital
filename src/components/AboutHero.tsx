import React from "react";
import AboutImg from "@/assets/images/about.png";
import Image from "next/image";
const AboutHero = () => {
  return (
    <div className="container-custom">
      <div className="text-4xl sm:text-7xl lg:text-9xl flex justify-around mt-8 mb-8 ">
        <h1 className="font-medium">ABOUT</h1>
        <div>
          {/* <Image src={Us} alt="" className="max-w-80" /> */}
          <div className="text-primary font-thin font-inter italic after:content-['US'] after:absolute relative after:left-2">
            US
          </div>
        </div>
      </div>
      <div>
        <Image src={AboutImg} alt="" className=" rounded-[30px]" />
      </div>
    </div>
  );
};

export default AboutHero;
