import Image from "next/image";
import React from "react";
import AboutImg from "@/assets/images/AboutValue.png"
const AbotVAlues = () => {
    return (
        <div className="px-[249px] py-[112px] dark:text-white">
            <div className="flex justify-between mb-[80px]">
                <h2 className="text-[50px] font-medium mt-14">Our <i className="text-primary-dark font-thin">Values</i></h2>
                <div className="font-light w-[331px]">
                    <h2 className="text-xs tracking-widest What we believe text-secondary-light">our clients</h2>
                    <p className="text-base mt-4 text-primary-grey">The client is paramount, and we prioritize dedicated support for our clients.  Welcome to the forefront of exceptional  service at Reset Digital.</p>
                </div>
            </div>
            <Image src={AboutImg} alt="image" className="mb-[80px]" />
        </div>
    );
};

export default AbotVAlues;
