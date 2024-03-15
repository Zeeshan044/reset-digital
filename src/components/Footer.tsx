import React from "react";
import facebook from "@/assets/images/facebook.svg"
import insta from "@/assets/images/insta.svg"
import twitter from "@/assets/images/twitter.svg"
import youtube from "@/assets/images/youtube.svg"
import Image from "next/image";

const Footer = () => {
    return (
        <div className="  px-[85px]">
            <div className=" flex justify-between">
                <div>
                    <p className=" font-semibold text-base mb-[17px] dark:text-white">RESET DIGITAL</p>
                    <p className=" text-[#111111] text-base font-light mb-3 dark:text-primary-grey">Where Creativity Meets Innovation.</p>
                    <div className=" flex gap-8">
                        <Image src={facebook} alt="" />
                        <Image src={insta} alt="" />
                        <Image src={twitter} alt="" />
                        <Image src={youtube} alt="" />
                    </div>
                </div>
                <div className=" grid grid-cols-3 dark:text-primary-grey">
                    <div className=" opensans gap-y-[10px] w-[215px]">
                        <p className="text-4 font-normal mb-[10px]">Main</p>
                        <p className=" text-[15px] font-light mb-3">Home</p>
                        <p className=" text-[15px] font-light mb-3">About</p>
                        <p className=" text-[15px] font-light mb-3">Projects</p>
                        <p className=" text-[15px] font-light mb-3">Projects Single</p>
                        <p className=" text-[15px] font-light mb-3">Team</p>
                        <p className=" text-[15px] font-light mb-3">Contact</p>
                    </div>
                    <div className=" opensans w-[215px]">
                        <p className="text-4 font-normal mb-[10px]">Other Pages</p>
                        <p className=" text-[15px] font-light mb-3">Packages </p>
                        <p className=" text-[15px] font-light mb-3">Packages Single </p>
                        <p className=" text-[15px] font-light mb-3">Blog </p>
                        <p className=" text-[15px] font-light mb-3">Blog Single</p>
                        <p className=" text-[15px] font-light mb-3">Privacy Policy</p>
                        <p className=" text-[15px] font-light mb-3">Terms & Conditions</p>
                    </div>
                    <div className=" opensans gap-y-[10px] w-[215px]">
                        <p className="text-4 font-normal mb-[10px]">Utilities</p>
                        <p className=" text-[15px] font-light mb-3">Style Guide</p>
                        <p className=" text-[15px] font-light mb-3">Licenses</p>
                        <p className=" text-[15px] font-light mb-3">Changelog</p>
                        <p className=" text-[15px] font-light mb-3">Instructions</p>
                        <p className=" text-[15px] font-light mb-3">404</p>
                        <p className=" text-[15px] font-light mb-3">Password</p>
                    </div>
                </div>
            </div>
            <hr className="bg-[#786DFF4D]/30 w-full mt-10" />
            <p className=" text-[15px] font-light pb-[71px] mt-10 dark:text-white">© 2024 Reset Digital. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;
