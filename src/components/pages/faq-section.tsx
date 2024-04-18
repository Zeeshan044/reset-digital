import React, { useState } from "react";
import post1 from "@/assets/images/post1.png";
import post2 from "@/assets/images/post2.png";
import avatar from "@/assets/images/avatar.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Button from "../ui/button";
import fadeInMotion from "../hoc/fade-in-motion";

import faqs from "@/data/faqs";
const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div className="p-section min-h-screen flex items-center font-montserrat py-24">
      <div className="flex gap-8 flex-wrap lg:flex-nowrap grow">
        <div className="lg:max-w-md lg:shrink-0">
          <div className="flex gap-[18px] mb-[26px] items-center">
            <hr className="bg-black dark:bg-white w-6 h-1" />
            <span className="font-normal text-xl dark:text-primary text-[#1E1E1E]">
              FAQS
            </span>
          </div>
          <div>
            <h2 className="font-extrabold text-2xl ">
              Quick answers to commonly asked questions.
            </h2>
            <p className="text-base font-normal mb-[25px] mt-[14px]">
              We take pride in providing transparency to our clients and strive
              to maintain clarity in everything we do. If you’re not ready to
              contact us but have a question, you may find answers here.
            </p>
            <Button variation="secondary">More FAQs</Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 grow">
          {faqs.map((faq, index) => (
            <div className="border-b pb-4" key={index}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <p className="font-semibold md:text-lg cursor-pointer">
                  {faq.question}
                </p>
                <span className="shrink-0">
                  {openIndex === index ? (
                    <IoIosArrowUp size={25} />
                  ) : (
                    <IoIosArrowDown size={25} />
                  )}
                </span>
              </div>
              {/* <hr className="dark:bg-[#CACACA] bg-primary border-1" /> */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="font-normal"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default fadeInMotion(Faqs);
