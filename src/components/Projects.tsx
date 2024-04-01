import React from "react";
import Left from "@/assets/images/portfolioLeft.png";
import Center from "@/assets/images/portfolioCenter.png";
import Right from "@/assets/images/portfolioRight.png";
import Showcase from "@/assets/images/designShowcase.png";

import Image from "next/image";

const Projects = () => {
  return (
    <div className="px-[83px] py-[112px] dark:text-white">
      <div className="flex justify-between mb-[54px]">
        <h2 className="text-[50px] font-medium mt-6">
          Explore our <i className="text-primary font-thin">Projects</i>{" "}
        </h2>
        <div className="font-light w-[331px]">
          <h5 className="text-sm tracking-widest">Artistry & Functionality</h5>
          <p className="text-base mt-4  ">
            Crafting unique, innovative solutions that transcend the ordinary.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-8">
        <div className="relative w-[620px] rounded-[20px]">
          <Image src={Showcase} alt="Center" className=" " />
          <div className="absolute top-0 left-0 m-4">
            <div className="flex gap-4">
              <p className="border border-primary-dark px-[15px] py-[9px] text-white">
                Branding
              </p>
              <p className="border border-primary-dark px-[15px] py-[9px] text-white">
                Design
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-64 ml-20 justify-center items-center">
              <h4 className="text-[#F5F5F5] text-[32px] font-medium">
                Innovative Design Portfolio
              </h4>
              <p className=" text-body  text-base font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[620px] rounded-[20px]">
          <Image src={Center} alt="Center" className=" " />
          <div className="absolute top-0 left-0 m-4 ">
            <div className="flex gap-4">
              <p className="border border-primary-dark px-[15px] py-[9px] text-white">
                Branding
              </p>
              <p className="border border-primary-dark px-[15px] py-[9px] text-white">
                Design
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-64 ml-20 justify-center items-center ">
              <h4 className="text-[#F5F5F5] text-[32px] font-medium">
                Innovative Design Portfolio
              </h4>
              <p className=" text-body  text-base font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[620px] rounded-[20px]">
          <Image src={Showcase} alt="Center" className="  " />
          <div className="absolute top-0 left-0 m-4">
            <div className="flex gap-4">
              <p className="border border-primary-dark px-[15px] py-[9px] text-white">
                Branding
              </p>
              <p className="border border-primary-dark px-[15px] py-[9px] text-white">
                Design
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-64 ml-20 justify-center items-center">
              <h4 className="text-[#F5F5F5] text-[32px] font-medium">
                Innovative Design Portfolio
              </h4>
              <p className=" text-body  text-base font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[620px] bg-gradient-to-br from-black to-slate-800 rounded-[20px]">
          <div className="absolute top-0 left-0 m-4 ">
            <div className="flex gap-4">
              <p className="border border-primary-dark px-[15px] py-[9px] text-white">
                Branding
              </p>
              <p className="border border-primary-dark px-[15px] py-[9px] text-white">
                Design
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-64 ml-20 justify-center items-center ">
              <h4 className="text-[#F5F5F5] text-[32px] font-medium">
                Innovative Design Portfolio
              </h4>
              <p className=" text-body  text-base font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
