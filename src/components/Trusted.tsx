import React from "react";
import trace from "../assets/images/trace.png";
import scale from "../assets/images/scale.png";
import chain from "../assets/images/chain.png";
import load from "../assets/images/load.png";
import Image from "next/image";

const Trusted = () => {
    return (
        <div className="px-[166px] py-[112px] dark:text-white">
            <div className="flex justify-between mb-[54px]">
                <h2 className="text-[50px] font-medium mt-14">Trusted by <i className="text-primary-dark font-thin">Great Brands</i></h2>
                <div className="font-light w-[331px]">
                    <h2 className="text-xs tracking-widest">our clients</h2>
                    <p className="text-base mt-4">The client is paramount, and we prioritize dedicated support for our clients. Welcome to the forefront of exceptional service at Reset Digital.</p>
                </div>
            </div>
            <div className="grid grid-cols-4 justify-between gap-x-[136px] px-20">
                <Image src={trace} alt="Trace" />
                <Image src={scale} alt="Scale" />
                <Image src={chain} alt="Chain" />
                <Image src={load} alt="Load" />
                <Image src={trace} alt="Trace" />
                <Image src={scale} alt="Scale" />
                <Image src={chain} alt="Chain" />
                <Image src={load} alt="Load" />
            </div>
        </div>
    ); 
};                                  
  
export default Trusted;
