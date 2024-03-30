import React from "react";
import ImageLeft from "@/assets/images/skill1.png";
import ImageCenter from "@/assets/images/skill2.png";
import ImageRight from "@/assets/images/skill3.png";
import Skill from "@/assets/images/skills.png";

import Bar from "@/assets/images/bar.png";

import Image from "next/image";

const Skills = () => {
  return (
    <div className="container-small py-24">
      <div className="pl-24 flex justify-between text-body-dark dark:text-body">
        <div className="max-w-56 font-light">
          <h5 className="text-xs mb-4 tracking-[8px]">Get To Know</h5>
          <p className="text-base tracking-[1px] font-light">
            Our creative process is tailored to fit your vision and maximize
            your potential.{" "}
          </p>
        </div>
        <div className="mt-10">
          <h2 className=" text-6xl font-medium">
            Visualize{" "}
            <i className=" text-primary-dark font-thin"> Our Skills</i>
          </h2>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2">
        <div className="">
          <Image src={Skill} alt="" className="" />
        </div>
        <div className="flex flex-col justify-around text-body-dark dark:text-body">
          <div className="mt-10 text-end">
            <h4 className="font-medium text-3xl border-b-2 pb-1 border-primary">
              Innovative
            </h4>
            <h5 className="font-light text-xs mt-2">DESIGN</h5>
          </div>
          <div className="text-end">
            <h4 className="font-medium text-3xl border-b-2 pb-1 border-primary">
              Unique
            </h4>
            <h5 className="font-light text-xs mt-2">branding</h5>
          </div>
          <div className="text-end">
            <h4 className=" font-medium text-3xl border-b-2 pb-1 border-primary">
              Tailored
            </h4>
            <h5 className="  font-light text-xs mt-2">SEO OPTIMIZATION</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
