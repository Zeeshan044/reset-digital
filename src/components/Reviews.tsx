import React, { useRef, useState } from "react";
import Image from "next/image";
import profile from "@/assets/images/profile.png";
import { motion, AnimatePresence } from "framer-motion";

const Reviews = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? prevIndex : index));
  };

  React.useEffect(() => {
    setTimeout(() => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
        console.log(containerRef.current.clientWidth);
      }
    }, 1000);
  }, []);

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
    <div className="max-w-7xl mx-auto pt-[112px] pb-[23px]">
      <div>
        <div className="flex flex-col items-center justify-center gap-y-4 mb-12 text-secondary-dark dark:text-secondary-light">
          <h5 className="text-xs font-light tracking-[8px]">TESTIMONIALS</h5>
          <h2 className="text-[50px] font-medium">
            Client <i className="text-primary-dark font-thin">Reviews</i>{" "}
          </h2>
        </div>
        <div className="flex">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`${
                expandedIndex === index
                  ? "h-auto"
                  : "bg-secondary-box mx-2 w-[100px] rounded-xl h-auto"
              }`}
              onClick={() => toggleExpand(index)}
              // initial={{ opacity: 0, y: 50 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.5 }}
            >
              <AnimatePresence>
                {expandedIndex === index ? (
                  <div ref={containerRef} className="grow">
                    <motion.div
                      initial={{ maxWidth: "0px" }}
                      animate={{ maxWidth: "100%" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      exit={{ maxWidth: "0px" }}
                      className="overflow-hidden"
                    >
                      <div
                        className="grid grid-cols-4"
                        style={{
                          minWidth: containerRef.current?.clientWidth || 0,
                        }}
                      >
                        <div className="col-span-3">
                          <div className="px-16 bg-secondary-box rounded-[30px] flex justify-center items-center h-[300px]">
                            <Image src={profile} alt="" />
                            <p className="font-light text-primary-grey">
                              {review.review}
                            </p>
                          </div>
                        </div>
                        <div className="font-light px-5 py-[30px]  flex flex-col justify-center items-center">
                          <h5 className="uppercase text-xs text-secondary-dark dark:text-secondary-light  mb-2 tracking-[8px]">
                            {review.name}
                          </h5>
                          <h6 className="uppercase text-[10px] text-primary-dark tracking-[8px]">
                            Client Review
                          </h6>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full cursor-pointer">
                    <button className="text-[25px] font-light text-white">
                      +
                    </button>
                  </div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

/**
 * {reviews.map((review, index) => (
            <div
              key={index}
              className={` ${
                expandedIndex === index
                  ? " h-auto"
                  : " bg-secondary-box mx-2 w-[100px] rounded-xl h-auto"
              }`}
              onClick={() => toggleExpand(index)}
            >
              {expandedIndex === index ? (
                <div className="flex">
                  <div className="pl-[60px] bg-secondary-box w-[800px] rounded-[30px] pr-[105px] flex justify-center items-center py-[90px]">
                    <Image src={profile} alt="" />
                    <p className="font-light text-primary-grey">
                      {review.review}
                    </p>
                  </div>
                  <div className="font-light px-5 py-[30px]  flex flex-col justify-center items-center">
                    <h5 className="uppercase text-xs text-secondary-dark dark:text-secondary-light  mb-2 tracking-[8px]">
                      {review.name}
                    </h5>
                    <h6 className="uppercase text-[10px] text-primary-dark tracking-[8px]">
                      Client Review
                    </h6>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full cursor-pointer">
                  <button className="text-[25px] font-light text-white">
                    +
                  </button>
                </div>
              )}
            </div>
          ))}
 * 
 * */
