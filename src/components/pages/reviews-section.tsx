import React, { useRef, useState } from "react";
import Image from "next/image";
import profile from "@/assets/images/profile.png";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../ui/heading";
import fadeInMotion from "../hoc/fade-in-motion";

const Reviews = () => {
  const sliderRef = useRef<Slider>(null);

  const reviews = [
    {
      name: "JAMES BLACK",
      review:
        "Collaborating with Reset Digital has been a fantastic journey. They simplified the creative process remarkably and offered pricing that was fair and competitive.",
    },
    {
      name: "Syed Ahmad",
      review:
        "Collaborating with Reset Digital has been a fantastic journey. They simplified the creative process remarkably and offered pricing that was fair and competitive.",
    },
    {
      name: "Ahmad Shah",
      review:
        "Collaborating with Reset Digital has been a fantastic journey. They simplified the creative process remarkably and offered pricing that was fair and competitive.",
    },
  ];

  return (
    <div className="p-section py-24">
      <div className="grid grid-cols-1 2xl:grid-cols-7 gap-12 items-start">
        <div className="2xl:col-span-2 flex flex-col justify-between h-full pb-8">
          <Heading subtitle="testimonials" title="Client" span="Reviews" />

          <div className="gap-6 hidden md:flex mt-4">
            <button
              onClick={() => {
                sliderRef.current?.slickPrev();
              }}
              className="bg-primary text-primary-foreground p-3"
            >
              <FaChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={() => {
                sliderRef.current?.slickNext();
              }}
              className="bg-primary text-primary-foreground p-3"
            >
              <FaChevronRight className="h-8 w-8" />
            </button>
          </div>
        </div>
        <div className="grow 2xl:col-span-5">
          <Slider ref={sliderRef} slidesToShow={1} arrows={false} autoplay>
            {reviews.map((review, index) => (
              <div key={index} className="overflow-hidden">
                <div className="grid lg:grid-cols-4">
                  <div className="lg:col-span-3">
                    <div className="px-8 md:px-16 bg-card flex justify-center items-center h-[300px]">
                      <div className="flex flex-col md:flex-row gap-x-6">
                        <Image
                          src={profile}
                          alt=""
                          className="shrink-0 h-20 w-20"
                        />
                        <div>
                          <p className="font-light">{review.review}</p>
                          <h5 className="uppercase text-xs mb-2 tracking-long mt-4 text-primary">
                            {review.name}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex font-light px-5 py-[30px] flex-col justify-center items-center">
                    <h5 className="uppercase text-xs    mb-2 tracking-long">
                      {review.name}
                    </h5>
                    <h6 className="uppercase text-[10px] text-primary tracking-long">
                      Client Review
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default fadeInMotion(Reviews);
