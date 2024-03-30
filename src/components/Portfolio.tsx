import React from "react";
import Left from "@/assets/images/portfolioLeft.png";
import Center from "@/assets/images/portfolioCenter.png";
import Right from "@/assets/images/portfolioRight.png";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="px-[166px] py-[112px] dark:text-white">
      <div className="flex justify-between mb-[54px]">
        <h2 className="text-[50px] font-medium mt-6">
          Explore our <i className="text-primary-dark font-thin">Projects</i>{" "}
        </h2>
        <div className="font-light w-[331px]">
          <h5 className="text-sm tracking-widest">Artistry & Functionality</h5>
          <p className="text-base mt-4 dark:text-body-dark dark:text-body">
            Crafting unique, innovative solutions that transcend the ordinary.
          </p>
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="relative">
          <Image src={Left} alt="Left" className="rounded-r-[20px]" />
          <div className="absolute inset-0 mt-56 flex flex-col ">
            <h4 className="text-[#F5F5F5] text-[20px] font-medium left-0">
              sign Showcase
            </h4>
            <p className=" text-body-dark dark:text-body text-base font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src={Center}
            alt="Center"
            className="rounded-[20px] bg-gradient-to-br from-black to-slate-800 "
          />
          <div className="absolute top-0 left-0 m-4">
            <div className="flex gap-4">
              <p className="border border-primary-dark px-[15px] py-[9px] text-white">
                Branding
              </p>
              <p className="border border-primary-dark px-[15px] py-[9px] text-white">
                Design
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-40 justify-center items-center">
              <h4 className="text-[#F5F5F5] text-[32px] font-medium">
                Innovative Design Portfolio
              </h4>
              <p className=" text-body-dark dark:text-body text-base font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={Right} alt="Right" className="rounded-l-[20px]" />
          <div className="absolute top-0 left-0">
            <div className="flex gap-4 m-4">
              <p className="border border-primary-dark px-[15px] py-[9px] text-white">
                Branding
              </p>
              <p className="border border-primary-dark px-[15px] py-[9px] text-white">
                Design
              </p>
            </div>
            <div className="flex flex-col mt-44 ml-28 ">
              <h4 className="text-secondary-light text-[16px] font-medium">
                Design Excellence
              </h4>
              <p className="text-body-dark dark:text-body text-base font-light">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
