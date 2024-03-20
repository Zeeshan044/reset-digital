import React from "react";
import logo from "@/assets/images/logoMain.png";
import Image from "next/image";
import Line from "@/assets/images/line.png";
import Spinner from "@/assets/images/spinner.svg";

const HomeAbout = () => {
  return (
    <div>
      <div className="flex gap-x-[20px] pt-[50px] max-w-7xl mx-auto pb-[158px] ">
        <div className="">
          <div className="mb-[32px]">
            <Image src={Line} alt="" />
          </div>
          <h2 className=" text-4xl font-extrabold dark:text-white w-[470px] montserrat">
            Reset Digital, your premier Toronto-based web consultancy firm.
          </h2>
          <p className=" text-base font-normal text-black dark:text-primary-dark pt-5 w-[406px] montserrat">
            A leading web consultancy firm specializing in crafting exquisite
            website designs and impactful branding solutions since 2023
          </p>
          <button className="font-bold text-xs py-[9px] px-[13px] mt-[54px] mb-[32px] dark:text-white rounded-[5px] dark:bg-[#82E8F280] bg-primary-dark border-2 border-[#786DFF4D]">
            VIEW OUR WORK
          </button>
          <p className=" font-light text-xl text-primary-grey">
            An innovative consultancy firm committed to transforming your ideas
            into reality, seamlessly blending -creativity with purpose.
          </p>
        </div>
        <div className=" items-center flex mr-28">
          <Image src={Spinner} alt="" className=" w-[120px] h-[120px]" />
        </div>
        <div className="">
          <Image src={logo} alt="" width={700} height={500} />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
