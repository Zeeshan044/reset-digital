import React from "react";
import Vector from "@/assets/images/Vector.svg";
import Image from "next/image";
import foundation from "@/assets/images/foundation.png";
import DoubleArrow from "./icons/DoubleArrow";
const Foundation = () => {
  return (
    <div className="w-full right-0 left-0">
      <div className={`pb-6 pt-8  dark:text-white`}>
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-between gap-4 items-center mb-8">
            <div className=" flex gap-3 px-[131px] items-center justify-center">
              <DoubleArrow />
              <p className=" text-base font-light">IDEA</p>
            </div>
            <div className=" flex gap-3 px-[131px] items-center justify-center">
              <DoubleArrow className="text-[#82E8F280]" />
              <p className=" text-base font-light">INNOVATE</p>
            </div>
            <div className=" flex gap-3 px-[131px] items-center justify-center">
              <DoubleArrow className="text-primary-dark" />
              <p className=" text-base font-light">ELEVATE</p>
            </div>
          </div>
          <div className="flex justify-center items-center archia">
            <h2 className=" text-2xl font-medium ">Foundation of Our work</h2>
          </div>
          <div className="flex justify-between gap-[19px] ml-14 mt-[66px] archia">
            <div className="flex flex-col justify-between">
              <div className=" font-medium mt-[50px] ml-10">
                <h2 className=" text-[25px]">Functionality</h2>
                <p className=" text-[13px] dark:text-white/60 text-primary-faq">
                  Designs that serve a purpose
                </p>
              </div>
              <div className=" font-medium mb-28">
                <h2 className=" text-[25px]">Simplicity</h2>
                <p className=" text-[13px] dark:text-white/60 text-primary-faq">
                  Complexity surfaced only when nessesery
                </p>
              </div>
            </div>
            <Image src={foundation} alt="" width={736} height={523} />
            <div className=" font-medium mt-[45px]">
              <h2 className=" text-[25px]">Emotion</h2>
              <p className=" text-[13px] dark:text-white/60 text-primary-faq">
                Products with a character & solutions optimized for emotion
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foundation;
