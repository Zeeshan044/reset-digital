import React from "react";
import Image from "next/image";
import LogoServiceImg from "@/assets/images/logoService.png";
const LogoService = () => {
  return (
    <div className=" text-body-dark dark:text-secondary-light py-28">
      <div className=" border border-primary-dark">
        <div className=" gap-24 flex">
          <div className="w-[719px]">
            <Image src={LogoServiceImg} alt="" className="  h-[639px]" />
          </div>
          <div className=" flex flex-col pl-14 pt-32 pb-28">
            <div className="w-[630px] gap-2 mb-20">
              <h5 className=" font-bold text-lg text-primary-dark font-montserrat mb-2">
                Balanced
              </h5>
              <h2 className=" font-bold text-5xl mb-3">
                Logo Design &
                <span className=" text-primary-dark pr-2">Brand Identity</span>{" "}
              </h2>
              <p className=" text-xl font-medium text-body-dark dark:text-body pr-28">
                Our logo design and brand identity services are dedicated to
                creating visual identities that resonate with your audience. We
                breathe life into your brand, ensuring it&apos;s not just seen
                but remembered.
              </p>
            </div>
            <button className=" bg-primary-dark text-secondary-dark py-3 px-6 w-36 rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoService;
