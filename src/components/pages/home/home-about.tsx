import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/assets/lottie/hero-animation.json";
import Button from "@/components/ui/button";

const HomeAbout = () => {
  return (
    <div className="max-w-7xl mx-auto px-10">
      <div className="grid grid-cols-2 items-center gap-x-5 py-12 min-h-fit h-[calc(100vh-92px)] max-h-[800px]">
        <div>
          <div className="h-1 bg-primary-dark w-12 mb-4"></div>
          <motion.h2
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
            className="leading-snug text-5xl font-extrabold dark:text-white font-montserrat"
          >
            <span className="bg-primary-dark text-black">Reset Digital,</span>
            <br />
            your premier Toronto-based web consultancy firm.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base font-normal text-black dark:text-primary-dark pt-5 font-montserrat"
          >
            A leading{" "}
            <span className="underline italic">web consultancy firm</span>{" "}
            specializing in exquisite{" "}
            <span className="underline italic">website designs</span> and{" "}
            <span className="underline italic">
              impactful branding solutions
            </span>{" "}
            since 2023, we are an innovative team committed to transforming your
            ideas into reality, seamlessly blending creativity with purpose.
          </motion.p>
          <motion.span
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button className="uppercase mt-12">Get started now</Button>
          </motion.span>
        </div>
        <div className="items-start flex overflow-hidden">
          <div className="flex items-center gap-12 w-full">
            <Lottie animationData={animationData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
