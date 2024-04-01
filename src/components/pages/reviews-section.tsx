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
    <div className="max-w-7xl mx-auto py-24 px-10">
      <div>
        <div className="flex flex-col items-center justify-center gap-y-4 mb-12  ">
          <h5 className="text-xs font-light tracking-[8px]">TESTIMONIALS</h5>
          <h2 className="text-[50px] font-medium">
            Client <i className="text-primary font-thin">Reviews</i>{" "}
          </h2>
        </div>
        <div className="flex">
          <AnimatePresence>
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`${
                  expandedIndex === index
                    ? "h-auto"
                    : "bg-card mx-2 w-[100px] rounded-xl h-auto"
                }`}
                onClick={() => toggleExpand(index)}
              >
                {expandedIndex === index ? (
                  <div ref={containerRef} className="grow">
                    <motion.div
                      initial={{ maxWidth: "0px" }}
                      animate={{ maxWidth: "100%" }}
                      transition={{ duration: 1, ease: "circOut" }}
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
                          <div className="px-16 bg-card rounded-[30px] flex justify-center items-center h-[300px]">
                            <Image src={profile} alt="" />
                            <p className="font-light  ">{review.review}</p>
                          </div>
                        </div>
                        <div className="font-light px-5 py-[30px]  flex flex-col justify-center items-center">
                          <h5 className="uppercase text-xs    mb-2 tracking-[8px]">
                            {review.name}
                          </h5>
                          <h6 className="uppercase text-[10px] text-primary tracking-[8px]">
                            Client Review
                          </h6>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full cursor-pointer shrink-0">
                    <button className="text-[25px] font-light text-white">
                      +
                    </button>
                  </div>
                )}
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
