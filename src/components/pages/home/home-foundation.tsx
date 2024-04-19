import React from "react";
import DoubleArrow from "../../icons/DoubleArrow";
import fadeInMotion from "@/components/hoc/fade-in-motion";
import Heading from "@/components/ui/heading";

const FOUNDATIONS = [
  {
    title: "IDEATE",
    description: "Design that serves a purpose",
    colorClass: "text-primary opacity-30",
  },
  {
    title: "INNOVATE",
    description: "Products with character that display your brand",
    colorClass: "text-primary opacity-70",
  },
  {
    title: "ELEVATE",
    description: "Complexity surfaced only when necessary",
    colorClass: "text-primary",
  },
];

const Foundation = () => {
  return (
    <section className="p-section py-24">
      <Heading title="Foundation of" span="Our Work" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
        <div>
          <ul className="flex flex-col gap-y-12">
            {FOUNDATIONS.map((foundation, index) => (
              <li key={index} className="flex gap-4 items-start group">
                <DoubleArrow
                  className={`group-hover:scale-125 duration-200 shrink-0 ${foundation.colorClass}`}
                />
                <div className=" border-b border-primary grow py-2">
                  <h3 className="text-2xl group-hover:text-primary duration-200 cursor-pointer">
                    {foundation.title}
                  </h3>
                  <p className="">{foundation.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="flex flex-col w-min">
            <div className="flex justify-center">
              <div className="h-48 w-48 sm:h-80 sm:w-80 xl:h-96 xl:w-96 bg-primary opacity-30 rounded-full backdrop-blur-3xl border border-white/30 -mb-20 sm:-mb-40 relative z-30"></div>
            </div>
            <div className="flex">
              <div className="h-48 w-48 sm:h-80 sm:w-80 xl:h-96 xl:w-96 bg-primary opacity-60 rounded-full backdrop-blur-3xl border border-white/30 relative z-10"></div>
              <div className="h-48 w-48 sm:h-80 sm:w-80 xl:h-96 xl:w-96 bg-primary rounded-full backdrop-blur-3xl border border-white/30 -ml-20 sm:-ml-40 relative z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default fadeInMotion(Foundation);
