import React from "react";
import discoverImg from "@/assets/images/discover.png"
import Foundation from "@/assets/images/foundation1.svg";
import Image from "next/image";
const DiscoveryStore = () => {
    return (
        <div className=" container-small pb-[112px]">
            <div className=" text-secondary-cold dark:text-primary-grey font-light flex gap-[102px] justify-between mb-12">
                <div className=" w-[397px]">
                    <h5 className="text-xs  tracking-widest">GET TO KNOW</h5>
                    <p className=" text-base mt-4">Welcome to Reset Digital, your dedicated partnerin web design and digital transformation. At the intersection of creativity and purpose, we bring ideas to life with a focus on showcasing unique features and enhancing visibility. What sets us apart is our client-centric approach – at Reset Digital, your vision is our priority. Join us on a journey where innovation meets purpose, and let's craft digital brilliance together.</p>
                </div>
                <div>
                    <h2 className="text-6xl font-medium  pr-[115px] ">Discover <i className=" text-primary-dark font-thin">Our
                        Story</i></h2>
                </div>
            </div>
            <div className="flex justify-between gap-10">
                <Image src={discoverImg} alt="" className=" rounded-[20px]" />
                <div className=" font-light text-base text-secondary-cold dark:text-primary-grey gap-[26px] ">
                    <p className=" mb-[26px]">Founded in 2024, Reset Digital was born out of a shared love
                        for design, technology, and the limitless possibilities of the
                        web.</p>
                    <p className=" mb-[26px]">We started as a small group of individuals who believed in
                        the power of the internet to shape businesses and create
                        meaningful online experiences.</p>
                    <p className=" mb-[26px]">
                        From our humble beginnings in a cozy office space, we've
                        grown into a dynamic and highly skilled team of experts,
                        united by the common goal of making the web a better place,
                        one pixel at a time.
                    </p>
                    <p className="">Our dedication to quality, innovation, and collaboration has
                        been the driving force behind our success.</p>
                </div>
            </div>
        </div>
    );
};

export default DiscoveryStore;
