import Image from "next/image";
import React from "react";
import AboutImg from "@/assets/images/AboutValue.png";
import Box1 from "@/assets/images/box1st.png";
import Box2 from "@/assets/images/box2nd.png";
import Box3 from "@/assets/images/box3rd.png";
import Box4 from "@/assets/images/boxlast.png";

const AboutValues = () => {
    return (
        <div className="px-[249px] pt-[112px] dark:text-white">
            <div className="flex justify-between mb-[80px]">
                <h2 className="text-[50px] font-medium mt-14">Our <i className="text-primary-dark font-thin">Values</i></h2>
                <div className="font-light w-[331px] text-secondary-cold dark:text-secondary-light">
                    <h2 className="text-xs tracking-widest What we believe ">our clients</h2>
                    <p className="text-base mt-4">The client is paramount, and we prioritize dedicated support for our clients. Welcome to the forefront of exceptional service at Reset Digital.</p>
                </div>
            </div>
            <Image src={AboutImg} alt="image" className="mb-[80px]" />
            <div className=" flex flex-col items-center justify-center">
                <div className="flex justify-between gap-4 px-[94px]">
                    <div className="bg-secondary-box font-light py-8 pl-8 rounded-[29px] w-[240px] h-[322px]">
                        <Image src={Box1} alt="" />
                        <h5 className="text-secondary-light text-xs mt-4">HARDWORK</h5>
                        <p className="text-primary-grey text-base">The client is paramount, and we prioritize dedicated support for our clients. Welcome to the forefront of exceptional service at Reset Digital.</p>
                    </div>
                    <div className="bg-secondary-box font-light py-8 px-8 rounded-[29px] w-[240px] h-[244px]">
                        <Image src={Box2} alt="" />
                        <h5 className="text-secondary-light text-xs mt-4">INNOVATION</h5>
                        <p className="text-primary-grey text-base">I am very sorry for the
                            pain, it will be
                            followed.</p>
                    </div>
                    <div className="bg-secondary-box font-light py-8 px-8 rounded-[29px] w-[240px] h-[244px]">
                        <Image src={Box3} alt="" />
                        <h5 className="text-secondary-light text-xs mt-4">GROWTH</h5>
                        <p className="text-primary-grey text-base">I am very sorry for the
                            pain, it will be
                            followed.</p>
                    </div>
                </div>
                <div className="bg-secondary-box font-light py-8 px-8 rounded-[29px] mt-4 w-[240px] h-[244px] -bottom-40">
                    <Image src={Box4} alt="" />
                    <h5 className="text-secondary-light text-xs mt-4">TEAMWORK</h5>
                    <p className="text-primary-grey text-base">I am very sorry for the
                        pain, it will be
                        followed.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutValues;
