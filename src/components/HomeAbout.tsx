import React from "react";
import logo from "@/assets/images/logo.png"
import Image from "next/image";
import Line from "@/assets/images/line.png"
const HomeAbout = () => {
    return (
        <div >
            <div className="flex justify-between gap-x-[328px] pt-[50px] pl-[111px] pr-[5px] pb-[158px]">
                <div className="montserrat">
                    <div className="mb-[32px]">
                        <Image src={Line} alt="" />
                    </div>
                    <h2 className=" text-4xl font-extrabold dark:text-white">We're Reset Digital,
                        a Toronto web
                        design company.</h2>
                    <p className=" text-base font-normal text-black dark:text-primary-dark pt-5">Reset Digital is a top web design agency
                        hand-crafting beautiful website design and
                        branding since 2024.</p>
                    <button className=" font-bold text-xs py-[9px] px-[13px] mt-[54px] mb-[32px] dark:text-white rounded-[5px] dark:bg-primary-btn bg-primary-dark">VIEW OUR WORK</button>
                    <p className=" font-light text-xl text-primary-grey">A dynamic design agency dedicated to bringing your
                        ideas to life. Where creativity meets purpose.</p>
                </div>
                <div className="mr-10">
                    <Image src={logo} alt="" width={700} height={500} />
                </div>
            </div>
        </div>

    );
};

export default HomeAbout;
