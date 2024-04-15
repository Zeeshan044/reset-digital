import React from "react";

const Packages = () => {
  return (
    <div className=" max-w-5xl mx-auto dark:text-white">
      <div className=" flex flex-col items-center pb-[66px] mt-[68px] ">
        <h5 className=" text-xs font-light  text-secondary-dark mb-4 tracking-long">
          OPTIONS
        </h5>
        <h2 className=" text-6xl font-medium mb-4">
          Our <i className=" text-primary font-thin">Packages</i>
        </h2>
        <p className=" text-base font-light text-center   text-secondary-dark px-[340px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          convallis.{" "}
        </p>
      </div>
      <div className=" grid grid-cols-2 gap-8 px-[177px] justify-center pb-[112px]">
        <div className=" bg-[#262626] px-8 py-16 font-light flex flex-col items-center rounded-[10px]">
          <h4 className=" text-secondary-light font-medium text-[32px] text-center ">
            Basic Branding Package
          </h4>
          <h2 className=" text-xl my-8 text-secondary-light ">$ 599.00 CAD</h2>
          <p className=" text-base   text-center">
            Ideal for startups and small businesses seeking to establish a
            strong brand identity.
          </p>
          <p className=" text-base   mt-8 mb-[13px]">Custom Logo Design</p>
          <hr className="border-b-1 border-[#999999] border-opacity-30 w-full" />
          <p className=" text-base   my-[13px]">Brand Color Palette</p>
          <hr className="border-b-1 border-[#999999] border-opacity-30 w-full" />
          <p className=" text-base   my-[13px]">Basic Brand Style Guide</p>
          <hr className="border-b-1 border-[#999999] border-opacity-30 w-full pb-3" />
          <button className=" text-center rounded-full bg-primary text-[#1D2025] mt-8 px-6 py-3 text-sm">
            Get Started
          </button>
        </div>
        <div className=" bg-[#262626] px-8 py-16 font-light flex flex-col items-center rounded-[10px]">
          <h4 className=" text-secondary-light font-medium text-[32px] text-center ">
            Professional Web Design Package
          </h4>
          <h2 className=" text-xl my-8 text-secondary-light ">
            $ 1,499.00 CAD
          </h2>
          <p className=" text-base   text-center">
            Perfect for businesses looking for a user-friendly and visually
            appealing website.
          </p>
          <p className=" text-base   mt-8 mb-[13px]">Custom Website Design</p>
          <hr className="border-b-1 border-[#999999] border-opacity-30 w-full" />
          <p className=" text-base   my-[13px]">SEO Optimization</p>
          <hr className="border-b-1 border-[#999999] border-opacity-30 w-full" />
          <p className=" text-base   my-[13px]">10 Pages</p>
          <hr className="border-b-1 border-[#999999] border-opacity-30 w-full pb-3" />
          <button className=" text-center rounded-full bg-primary text-[#1D2025] mt-8 px-6 py-3 text-sm">
            Get Started
          </button>
        </div>
        <div className=" bg-[#262626] px-8 py-16 font-light flex flex-col items-center  rounded-[10px]">
          <h4 className=" text-secondary-light font-medium text-[32px] text-center ">
            Premium Design & Marketing Package
          </h4>
          <h2 className=" text-xl my-8 text-secondary-light ">
            $ 2,399.00 CAD
          </h2>
          <p className=" text-base   text-center">
            An all-in-one package for businesses looking for a complete design
            and marketing solution.
          </p>
          <p className=" text-base   mt-8 mb-[13px]">
            Website Design & Development
          </p>
          <hr className="border-b-1 border-[#999999] border-opacity-30 w-full" />
          <p className=" text-base   my-[13px]">Social Media Graphics</p>
          <hr className="border-b-1 border-[#999999] border-opacity-30 w-full" />
          <p className=" text-base   my-[13px]">SEO Services</p>
          <hr className="border-b-1 border-[#999999] border-opacity-30 w-full pb-3" />
          <button className=" text-center rounded-full bg-primary text-[#1D2025] mt-8 px-6 py-3 text-sm">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
