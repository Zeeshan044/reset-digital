import React from "react";
import trace from "@/assets/images/trace.png";
import scale from "@/assets/images/scale.png";
import chain from "@/assets/images/chain.png";
import load from "@/assets/images/load.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Heading from "../ui/heading";
import fadeInMotion from "../hoc/fade-in-motion";

const PartnerSection = () => {
  return (
    <div className="p-section flex flex-col gap-12 py-24">
      <div className="flex flex-wrap-reverse justify-between gap-8 mb-8">
        <div className="font-light max-w-lg">
          <h5 className="text-xs tracking-long">OUR CLIENTS</h5>
          <p className="text-base mt-4 dark:text-white ">
            The client is paramount, and we prioritizededicated support for our
            clients. Welcome to the forefront of exceptional service at Reset
            Digital.
          </p>
        </div>
        <Heading title="Trusted by" span="Great Brands" />
      </div>
      <div className="grow">
        <Marquee autoFill>
          <Image src={trace} alt="Trace" className="mx-8" />
          <Image src={scale} alt="Scale" className="mx-8" />
          <Image src={chain} alt="Chain" className="mx-8" />
          <Image src={load} alt="Load" className="mx-8" />
        </Marquee>
        <Marquee autoFill>
          <Image src={load} alt="Load" className="mx-8" />
          <Image src={chain} alt="Chain" className="mx-8" />
          <Image src={scale} alt="Scale" className="mx-8" />
          <Image src={trace} alt="Trace" className="mx-8" />
        </Marquee>
        <Marquee autoFill>
          <Image src={load} alt="Load" className="mx-8" />
          <Image src={scale} alt="Scale" className="mx-8" />
          <Image src={trace} alt="Trace" className="mx-8" />
          <Image src={chain} alt="Chain" className="mx-8" />
        </Marquee>
      </div>
    </div>
  );
};

export default fadeInMotion(PartnerSection);
