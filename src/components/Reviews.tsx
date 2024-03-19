import React from "react";
import profile from "@/assets/images/profile.png"
import Image from "next/image";
const Reviews = () => {
    return (
        <div className=" max-w-7xl mx-auto pt-[112px] pb-[23px] ">
            <div>
                <div className=" flex flex-col items-center justify-center gap-y-4 mb-12 text-secondary-dark dark:text-secondary-light">
                    <h5 className=" text-xs font-light tracking-widest">TESTIMONIALS</h5>
                    <h2 className=" text-[50px] font-medium">client <i className=" text-primary-dark font-thin">Reviews</i> </h2>
                </div>
                <div className="flex">
                    <div className="bg-secondary-box rounded-[30px] h-[300px] w-[800px]  ">
                        <div className="pl-[60px] pr-[105px] flex justify-center items-center py-[90px]">
                            <Image src={profile} alt="" />
                            <p className=" text-xs font-light text-primary-grey ">Collaborating with Reset Digital has been a fantastic journey.
                                They simplified the creative process remarkably and offered pricing
                                that was fair and competitive.</p>
                        </div>
                    </div>

                    <div className="font-light  h-[300px] flex flex-col w-[240px] items-center justify-center tracking-widest">
                        <h5 className=" text-xs text-secondary-dark dark:text-secondary-light mb-2 ">JAMES BlacK</h5>
                        <h6 className=" text-[10px] text-primary-dark ">Client Review</h6>
                    </div>
                    <div className="flex items-center px-[34px] h-[300px]  bg-[#292D32] mr-[6px] rounded-[10px]">
                        <button className=" text-[25px] font-light text-white">+</button>
                    </div>
                    <div className="flex items-center h-[300px] px-[22px] bg-[#292D32] rounded-[10px]">
                        <button className=" text-[25px] font-light text-white">+</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Reviews;
