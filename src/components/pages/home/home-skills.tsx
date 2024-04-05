import React from "react";
import Skill from "@/assets/images/skills.png";

import Image from "next/image";

const Skills = () => {
  return (
    <div className="p-section min-h-screen flex items-center">
      <div className="grow">
        <div className="flex justify-between gap-x-8 flex-wrap-reverse gap-y-6">
          <div className="max-w-lg font-light">
            <h5 className="text-xs mb-4 tracking-long">Get To Know</h5>
            <p className="text-base tracking-[1px] font-light">
              Our creative process is tailored to fit your vision and maximize
              your potential.{" "}
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-5xl md:text-6xl font-medium">
              Visualize{" "}
              <i className="bg-primary text-primary-foreground whitespace-nowrap">
                {" "}
                Our Skills
              </i>
            </h2>
          </div>
        </div>
        <div className="mt-6 grid md:grid-cols-2">
          <div className="flex gap-12 justify-center">
            <div className="relative aspect-[9/25] rotate-12 hover:-translate-y-8 duration-200">
              <Image
                src="https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="object-cover"
                fill
              />
            </div>
            <div className="relative aspect-[9/25] rotate-12 hover:-translate-y-8 duration-200">
              <Image
                src="https://images.unsplash.com/photo-1506792006437-256b665541e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="object-cover"
                fill
              />
            </div>
            <div className="relative aspect-[9/25] rotate-12 hover:-translate-y-8 duration-200">
              <Image
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="object-cover"
                fill
              />
            </div>
          </div>
          <div className="flex flex-col justify-around gap-20">
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
    </div>
  );
};

export default Skills;
