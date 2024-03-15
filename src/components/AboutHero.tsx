import React from "react";
import AboutImg from "@/assets/images/about.png"
import Image from "next/image";
const AboutHero = () => {
    return (
        <div>
            <div className=" text-9xl flex justify-between px-[144px] mt-[68px] mb-[32px] dark:text-white">
                <h1 className="font-medium">ABOUT</h1>
                <h1 className="inter text-primary-dark font-thin "><i>US</i></h1>
            </div>
            <Image src={AboutImg} alt="" className=" rounded-[30px]" />
        </div>
    );
};

export default AboutHero;
