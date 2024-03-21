import React from "react";
import AboutImg from "@/assets/images/about.png"
import Us from "@/assets/images/us.png"
import Image from "next/image";
import { motion } from "framer-motion";
const AboutHero = () => {
    return (
        <div className=" dark:text-secondary-light text-secondary-cold">
            <div className=" text-9xl flex justify-between px-[144px] mt-[68px] mb-[32px] ">
                <motion.h1 className="font-medium" initial={{ x: -200 }} animate={{ x: 0 }}>ABOUT</motion.h1>
                {/* <h1 className="inter text-primary-dark font-thin "><i>US</i></h1> */}
                <motion.p initial={{ y: -200 }} animate={{ y: 0 }} className=" text-base font-light px-[100px] text-center mt-2 ">The customer is very important, the
                    customer will be followed by the customer.
                    The valley, but the pain will follow.</motion.p>
                <motion.div initial={{ x: 200 }} animate={{ x: 0 }} >
                    <Image src={Us} alt="" className="w-[300px] h-[120px]" />
                </motion.div>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.5 }}>
                <Image src={AboutImg} alt="" className=" rounded-[30px]" />
            </motion.div>
        </div>
    );
};

export default AboutHero;
