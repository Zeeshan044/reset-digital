import React from "react";
import ImageLeft from "@/assets/images/skill1.png";
import ImageCenter from "@/assets/images/skill2.png";
import ImageRight from "@/assets/images/skill3.png";
import Skill from "@/assets/images/skills.png";

import Bar from "@/assets/images/bar.png";

import Image from "next/image";

const Skills = () => {
  return (
    <div className=" container-small pt-[112px] pb-[43px]">
      <div className=" pl-[100px]  flex justify-between text-secondary-cold dark:text-secondary-light">
        <div className=" w-[224px] font-light ">
          <h5 className=" text-xs   mb-4 tracking-[8px]">Get To Know</h5>
          <p className=" text-base tracking-[1px] font-light">
            Our creative process is tailored to fit your vision and maximize
            your potential.{" "}
          </p>
        </div>
        <div className=" mt-10">
          <h2 className=" text-6xl font-medium">
            Visualize{" "}
            <i className=" text-primary-dark font-thin"> Our Skills</i>
          </h2>
        </div>
      </div>
      <div className=" mt-6 flex justify-between">
        {/* <div className="flex w-[462px] h-[354px] ">
                    <Image src={ImageLeft} alt="" className="" />
                    <Image src={ImageCenter} alt="" className=" -ml-20" />
                    <Image src={ImageRight} alt="" className=" -ml-20" />
                </div> */}
        <div className="">
          <Image src={Skill} alt="" className="" />
        </div>
        <div className=" flex flex-col justify-between text-secondary-cold dark:text-secondary-light ">
          <div className=" mt-10  justify-end flex flex-col items-end">
            <h4 className=" font-medium text-[32px]">Innovative</h4>
            <Image src={Bar} alt="" />
            <h5 className="  font-light text-xs mt-2">DESIGN</h5>
          </div>
          <div className="  justify-end flex flex-col items-end">
            <h4 className=" font-medium text-[32px]">Unique</h4>
            <Image src={Bar} alt="" />
            <h5 className="  font-light text-xs mt-2">branding</h5>
          </div>
          <div className=" mb-14 justify-end flex flex-col items-end">
            <h4 className=" font-medium text-[32px]">Tailored</h4>
            <Image src={Bar} alt="" />
            <h5 className="  font-light text-xs mt-2">SEO OPTIMIZATION</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
