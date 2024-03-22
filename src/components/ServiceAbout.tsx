import Image from "next/image";
import React from "react";
import AboutImg from "@/assets/images/serviceAbout.png"

const ServiceAbout = () => {
    return (
        <div className=" dark:text-secondary-light text-secondary-cold">
            <div className=" flex flex-col items-center mt-8">
                <h2 className=" text-9xl font-semibold mb-8">Our <i className=" font-thin text-primary-dark">Services</i></h2>
                <i className=" font-medium text-3xl">Where vision comes to Life.</i>
                <Image src={AboutImg} alt="about" />
                <p className=" text-3xl font-medium text-center px-[173px] py-20">Embark on a creative odyssey with Reset Digital. We create websites that aren’t just beautiful but also embody the essence of your brand. Powered by Webflow; elevated by our generative and 3D solutions: we will make your vision an awe-inspiring reality.</p>
            </div>
        </div>
    );
};

export default ServiceAbout;
