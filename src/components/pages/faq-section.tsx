import React, { useState } from "react";
import post1 from "@/assets/images/post1.png";
import post2 from "@/assets/images/post2.png";
import avatar from "@/assets/images/avatar.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Button from "../ui/button";

const Faqs = () => {
  const faqs = [
    {
      question: "Why work with Reset Digital?",
      answer:
        "We offer innovative solutions tailored to your needs, ensuring a unique and effective digital presence.",
    },
    {
      question: "Where is your team based?",
      answer:
        "Our team is based in Lahore, but we work with clients worldwide.",
    },
    {
      question: "What is your web design process like?",
      answer:
        "Our web design process is collaborative and iterative, ensuring your vision is realized effectively.",
    },
    {
      question: "What will my project cost?",
      answer:
        "Costs vary depending on the scope and complexity of your project. Contact us for a detailed quote.",
    },
    {
      question: "Do you offer website maintenance?",
      answer:
        "Yes, we offer website maintenance services to keep your site running smoothly.",
    },
    {
      question: "How can I get an estimate for my project?",
      answer:
        "You can request a project estimate by contacting us with your project details.",
    },
    {
      question: "What industries or types of clients do you work with?",
      answer:
        "We work with clients from various industries, providing tailored solutions to meet their specific needs.",
    },
    {
      question: "Can you fix my existing website?",
      answer:
        "Yes, we can assess your existing website and provide solutions to improve its functionality and design.",
    },
    {
      question: "Who will be working on my project?",
      answer:
        "Our experienced team of designers and developers will collaborate on your project to deliver high-quality results.",
    },
    {
      question: "Do you offer search engine optimization services?",
      answer:
        "Yes, we offer SEO services to improve your website's visibility and ranking on search engines.",
    },
    {
      question: "Do you use templates in your web design and development?",
      answer:
        "We prefer to create custom designs to ensure your website is unique and tailored to your brand.",
    },
    {
      question: "Do you offer any digital marketing agency services?",
      answer:
        "Yes, we offer a range of digital marketing services to help promote your brand and reach your target audience.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div className="dark:text-white text-primary-faq container-custom">
      <div className="flex justify-between gap-8 flex-wrap font-montserrat xl:px-24 py-8 dark:border-none">
        <div className="lg:w-80">
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
        <div className="w-full lg:max-w-2xl flex flex-col gap-4">
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

export default Faqs;
