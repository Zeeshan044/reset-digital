import React from "react";
import logo from "@/assets/images/logoMain.png";
import Image from "next/image";
import Line from "@/assets/images/line.png";
import Spinner from "@/assets/images/spinner.svg";

const HomeAbout = () => {
  return (
    <div className="custom-container">
      <div className="flex gap-x-[20px] pt-[70px] max-w-7xl mx-auto h-screen max-h-[800px]">
        <div className="">
          <div className="mb-[32px]">
            <Image src={Line} alt="" />
          </div>
          <h2 className=" text-4xl font-extrabold dark:text-white w-[470px] montserrat">
            Reset Digital, your premier Toronto-based web consultancy firm.
          </h2>
          <p className="text-base font-normal text-black dark:text-primary-dark pt-5 w-[406px] montserrat">
            A leading web consultancy firm specializing in crafting exquisite
            website designs and impactful branding solutions since 2023
          </p>
          <button className="font-bold text-xs py-[9px] px-[13px] mt-[54px] mb-[32px] dark:text-white rounded-[5px] dark:bg-[#82E8F280] bg-primary-dark border-2 border-[#786DFF4D]">
            GET STARTED NOW
          </button>
          <p className="text-base font-normal text-black dark:text-white montserrat">
            An innovative consultancy firm committed to transforming your ideas
            into reality, seamlessly blending -creativity with purpose.
          </p>
        </div>
        <div className="items-start flex mr-28">
          <div className="flex items-center gap-20">
            <Image src={Spinner} alt="" className="w-[120px] h-[120px]" />
            <Image src={logo} alt="" />
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default HomeAbout;
