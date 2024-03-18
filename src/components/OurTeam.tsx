import React from "react";

const OurTeam = () => {
    return (
        <div className="px-[112px] dark:text-white">
            <div className=" flex flex-col items-center">
                <h5 className=" text-xs font-light text-secondary-light mb-4 tracking-widest">who we are</h5>
                <h2 className="text-[50px] font-medium mb-[42px]">Meet our <i className=" text-primary-dark font-thin">
                    Team</i>
                </h2>
                <p className=" text-base font-light">Our group of experts set to bring your ideas to reality.  </p>
            </div>
            <div className=" gap-[63px] flex mt-[106px] ml-10">
                <div className="bg-secondary-dark dark:bg-white w-[324px] h-[320px] relative">
                    <h4 className="text-xs mx-[54px] text-center text-primary-dark font-light px-[74px] w-[200px] pt-[43px] pb-[13px] bg-secondary-box absolute -bottom-10 flex items-center tracking-widest" >CEO</h4>
                </div>
                <div className="bg-secondary-dark dark:bg-white w-[324px] h-[320px] relative">
                    <h4 className="text-xs mx-[54px] text-center text-primary-dark font-light px-[74px] pt-[43px] pb-[13px] bg-secondary-box absolute -bottom-10 flex items-center tracking-widest" >MANAGER</h4>
                </div>
                <div className="bg-secondary-dark dark:bg-white w-[324px] h-[320px] relative">
                    <h4 className="text-xs mx-[54px] text-center text-primary-dark font-light px-[74px] pt-[43px] pb-[13px] bg-secondary-box absolute -bottom-10 flex items-center tracking-widest" >ENGINEER</h4>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
