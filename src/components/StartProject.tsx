import React from "react";
import Project1 from "@/assets/images/project.png";
import Project2 from "@/assets/images/project2.png";
import Image from "next/image";
import Link from "next/link";
const StartProject = () => {
  return (
    <div className="max-w-6xl mx-auto py-24 ">
      <div className="bg-card pl-40 py-[90px] rounded-[30px] flex flex-col items-start relative overflow-hidden">
        <div className="flex flex-col items-center">
          <h5 className="text-xs font-light tracking-[8px]">GET IN TOUCH</h5>
          <h2 className="text-6xl font-medium text-center my-[18px]">
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
        <Image src={Project2} alt="" className="absolute right-0 top-0" />
        <Image src={Project1} alt="" className="absolute right-0" />
      </div>
    </div>
  );
};

export default StartProject;
