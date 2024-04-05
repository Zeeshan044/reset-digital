import React, { useRef, useState } from "react";
import Image from "next/image";
import profile from "@/assets/images/profile.png";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <div className="grid grid-cols-7 gap-12 items-start">
        <div className="col-span-2 flex flex-col justify-between h-full pb-8">
          <div>
            <h5 className="text-xs font-light tracking-long">TESTIMONIALS</h5>
            <h2 className="text-6xl !leading-normal font-medium">
              Client{" "}
              <i className="bg-primary text-primary-foreground">Reviews</i>{" "}
            </h2>
          </div>

          <div className="flex gap-6 ">
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
        <div className="grow col-span-5">
          <Slider ref={sliderRef} slidesToShow={1} arrows={false}>
            {reviews.map((review, index) => (
              <div key={index} className="overflow-hidden">
                <div className="grid grid-cols-4">
                  <div className="col-span-3">
                    <div className="px-16 bg-card flex justify-center items-center h-[300px]">
                      <Image src={profile} alt="" />
                      <p className="font-light  ">{review.review}</p>
                    </div>
                  </div>
                  <div className="font-light px-5 py-[30px]  flex flex-col justify-center items-center">
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

export default Reviews;
