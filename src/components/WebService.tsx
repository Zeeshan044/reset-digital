import React from "react";
import Image from "next/image";
import WebImage from "@/assets/images/webService.png";
const WebService = () => {
  return (
    <div className=" text-body dark:text-secondary-light py-28">
      <div className=" border border-primary-dark">
        <div className=" gap-24 flex">
          <div className=" flex flex-col pl-14 pt-32 pb-28">
            <div className="w-[630px] gap-2 mb-20">
              <h5 className=" font-bold text-lg text-primary font-montserrat mb-2">
                Beautiful
              </h5>
              <h2 className=" font-bold text-5xl mb-3">
                Web Design &
                <span className=" text-primary pr-2">Development</span>{" "}
              </h2>
              <p className=" text-xl font-medium text-body  pr-28">
                We engineer online experiences that captivate, engage, and
                convert. From responsive design to custom code, we ensure your
                brand&apos;s digital canvas is nothing short of exceptional.
              </p>
            </div>
            <button className=" bg-primary text-secondary-dark py-3 px-6 w-36 rounded-full">
              Learn More
            </button>
          </div>
          <div className="w-[719px]">
            <Image src={WebImage} alt="" className="  h-[639px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebService;
