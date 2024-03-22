import React, { useState } from "react";
import Image from "next/image";
import profile from "@/assets/images/profile.png";
import { motion, AnimatePresence } from "framer-motion"

const Reviews = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? prevIndex : index));
  };

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
              className={` ${expandedIndex === index ? " h-auto" : " bg-secondary-box mx-2 w-[100px] rounded-xl h-auto"
                }`}
              onClick={() => toggleExpand(index)}
            >
              {expandedIndex === index ? (
                <div className=" flex">
                  <motion.div
                    className="pl-[60px] bg-secondary-box w-[800px] rounded-[30px] pr-[105px] flex justify-center items-center py-[90px]"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    > */}
                    <Image src={profile} alt="" />
                    {/* </motion.div> */}
                    <motion.p
                      className="font-light text-primary-grey "
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {review.review}
                    </motion.p>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-light px-5 py-[30px]  flex flex-col justify-center items-center">
                    <h5 className="uppercase text-xs text-secondary-dark dark:text-secondary-light  mb-2 tracking-[8px]">
                      {review.name}
                    </h5>
                    <h6 className="uppercase text-[10px] text-primary-dark tracking-[8px]">
                      Client Review
                    </h6>
                  </motion.div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <button className="text-[25px] font-light text-white">+</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
