import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/assets/lottie/hero-animation.json";
import Button from "@/components/ui/button";
import HeroLogo from "@/assets/images/hero-logo.png";
import Image from "next/image";
import Link from "next/link";

const HomeAbout = () => {
  return (
    <div className="px-10">
      <div className="grid lg:grid-cols-2 items-center gap-x-5 h-[calc(100vh-92px)] max-h-[1000px]">
        <div className="relative z-20">
          <div className="h-1 bg-primary w-12 mb-4"></div>
          <motion.h2
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
            className="!leading-snug text-3xl md:text-5xl font-extrabold dark:text-white font-montserrat"
          >
            <span className="bg-primary text-black">Reset Digital,</span>
            <br />
            your premier Toronto-based web consultancy firm.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-normal text-black text-primary pt-5 font-montserrat"
          >
            A leading web consultancy firm specializing in exquisite website
            designs and impactful branding solutions since 2023, we are an
            innovative team committed to transforming your ideas into reality,
            seamlessly blending creativity with purpose.
          </motion.p>
          <motion.span
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button className="uppercase mt-12">Get started now</Button>
            </Link>
          </motion.span>

          <Image
            src={HeroLogo}
            alt=""
            className="absolute top-0 right-0 opacity-25 -z-10 max-w-96 w-full lg:hidden"
          />
        </div>
        <div className="hidden lg:flex overflow-hidden self-stretch">
          <div className="flex items-center justify-center gap-12 w-full">
            <Lottie
              animationData={animationData}
              className="h-full aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
