import React from "react";
import AboutImg from "@/assets/images/about.png"
import Us from "@/assets/images/us.png"
import Image from "next/image";
const AboutHero = () => {
    return (
        <div className=" dark:text-secondary-light text-secondary-cold">
            <div className=" text-9xl flex justify-between px-[144px] mt-[68px] mb-[32px] ">
                <h1 className="font-medium">ABOUT</h1>
                {/* <h1 className="inter text-primary-dark font-thin "><i>US</i></h1> */}
                <p className=" text-base font-light px-[100px] text-center mt-2 ">The customer is very important, the
                    customer will be followed by the customer.
                    The valley, but the pain will follow.</p>
                <Image src={Us} alt="" />
            </div>

            <div>
                <Image src={AboutImg} alt="" className=" rounded-[30px]" />
            </div>
        </div>
    );
};

export default AboutHero;
