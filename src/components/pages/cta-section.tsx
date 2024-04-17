import React from "react";
import Project1 from "@/assets/images/project.png";
import Project2 from "@/assets/images/project2.png";
import Image from "next/image";
import Link from "next/link";
import fadeInMotion from "../hoc/fade-in-motion";
const CTASection = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 p-section">
      <div className="bg-card md:pl-40 py-24 flex flex-col items-center md:items-start relative overflow-hidden z-20">
        <div className="flex flex-col items-center">
          <h5 className="text-xs font-light tracking-long">GET IN TOUCH</h5>
          <h2 className="text-5xl md:text-6xl font-medium text-center my-[18px]">
            Let&apos;s Start <br />
            <i className=" font-thin text-primary -mt-5"> Your Project</i>
          </h2>
          <p className="text-base font-light text-center text-white px-[50px]">
            Contact us to create <br />
            your dream online presence
          </p>
          <Link
            href="/contact"
            className="bg-primary py-3 px-6 rounded-full mt-8 text-primary-foreground"
          >
            Get In Touch
          </Link>
        </div>
        <Image
          src={Project2}
          alt=""
          className="absolute right-0 top-0 -z-10 hidden sm:block"
        />
        <Image
          src={Project1}
          alt=""
          className="absolute right-0 -z-10 hidden sm:block"
        />
      </div>
    </div>
  );
};

export default fadeInMotion(CTASection);
