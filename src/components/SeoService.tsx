import React from "react";
import Image from "next/image";
import SeoImage from "@/assets/images/SeoService.png"
const SeoService = () => {
    return (
        <div className=" text-secondary-cold dark:text-secondary-light py-28">
            <div className=" border border-primary-dark">
                <div className=" gap-24 flex">
                    <div className=" flex flex-col pl-14 pt-32 pb-28">
                        <div className="w-[630px] gap-2 mb-20">
                            <h5 className=" font-bold text-lg text-primary-dark montserrat mb-2">Optimized</h5>
                            <h2 className=" font-bold text-5xl mb-3">Copywriting &
                                <span className=" text-primary-dark pr-2">SEO Services</span> </h2>
                            <p className=" text-xl font-medium dark:text-primary-grey pr-28">Words have the power to inspire, inform, and persuade. Our copywriting and SEO services are where words come to life. We craft compelling narratives and ensure they're discovered. Your brand's message is not just heard; it's amplified.</p>
                        </div>
                        <button className=" bg-primary-dark text-secondary-dark py-3 px-6 w-36 rounded-full">Learn More</button>
                    </div>
                    <div className="w-[719px]" >
                        <Image src={SeoImage} alt="" className="  h-[652px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeoService;
