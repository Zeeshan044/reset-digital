import React from "react";
import fadeInMotion from "./hoc/fade-in-motion";

const ContactUs = () => {
  return (
    <div className="container-small mt-[68px] pb-[284px]">
      <div className=" bg-card py-20 px-[70px] flex flex-col gap-8">
        <div className=" gap-4 flex flex-col items-center px-[30px]">
          <h5 className=" font-light text-xs text-secondary-light tracking-[8px]">
            GET IN TOUCH
          </h5>
          <h2 className=" text-[58px] font-medium text-white px-10">
            Request a Free{" "}
            <i className=" text-primary font-thin">Consultation</i>
          </h2>
          <p className=" font-light text-base text-body  text-center px-[239px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            convallis.
          </p>
        </div>
        <form className=" px-[55px] ">
          <div className="pt-[10px] flex  w-full">
            <div className="gap-2 pr-[15px] pb-[10px] flex flex-col ">
              <label
                htmlFor="name"
                className=" text-base font-thin text-secondary-light"
              >
                Name
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Name"
                className=" w-[357px] px-4 py-[23px] rounded-[5px] bg-[#F1F3F5] text-secondary-dark"
              />
            </div>
            <div className="gap-2 px-[15px] pb-[10px] flex flex-col ">
              <label
                htmlFor="name"
                className=" text-base font-thin text-secondary-light"
              >
                Email
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Email"
                className=" w-[357px] px-4 py-[23px] rounded-[5px] bg-[#F1F3F5] text-secondary-dark"
              />
            </div>
          </div>
          <div className="pt-[10px] flex  w-full">
            <div className="gap-2 pr-[15px]  pb-[10px] flex flex-col ">
              <label
                htmlFor="name"
                className=" text-base font-thin text-secondary-light"
              >
                Phone Number
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="+ 1009 12345"
                className=" w-[357px] px-4 py-[23px] rounded-[5px] bg-[#F1F3F5] text-secondary-dark"
              />
            </div>
            <div className="gap-2 px-[15px] pb-[10px] flex flex-col ">
              <label
                htmlFor="name"
                className=" text-base font-thin text-secondary-light"
              >
                Service
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Consultation"
                className=" w-[357px] px-4 py-[23px] rounded-[5px] bg-[#F1F3F5] text-secondary-dark"
              />
            </div>
          </div>
          <div className="pt-[10px]  w-full">
            <div className="gap-2 pb-[10px] flex flex-col ">
              <label
                htmlFor="name"
                className=" text-base font-thin text-secondary-light"
              >
                Message Us
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Message"
                className="w-[744px] h-[152px] px-4 pt-[9px] pb-[103px] rounded-[5px] bg-[#F1F3F5] text-secondary-dark"
              />
            </div>
          </div>
          <button className=" text-center rounded-full bg-primary text-[#1D2025] mt-8 px-6 py-3 text-sm">
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default fadeInMotion(ContactUs);
