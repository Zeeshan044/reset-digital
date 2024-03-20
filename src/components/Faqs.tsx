import React from "react";
import post1 from "@/assets/images/post1.png";
import post2 from "@/assets/images/post2.png";
import avatar from "@/assets/images/avatar.png";

import Image from "next/image";

const Faqs = () => {
  return (
    <div className="dark:text-white text-primary-faq custom-container">
      <div className="flex justify-between  montserrat border border-black pl-24 py-8 dark:border-none">
        <div className="w-[251px] ">
          <div className="flex gap-[18px] mb-[26px] items-center">
            <hr className="bg-black dark:bg-white w-6 h-1" />
            <p className="font-normal text-xl text-primary-dark">FAQS</p>
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
            <a
              href=""
              className="bg-black dark:bg-white border-primary-dark rounded-[5px] border text-white dark:text-black font-bold text-xs py-[9px] px-[14px]"
            >
              More FAQs
            </a>
          </div>
        </div>
        <div className="w-[650px]">
          <div>
            <p className=" font-semibold text-lg my-[15px]">
              Why work with Reset Digital?
            </p>
            <hr className="dark:bg-[#CACACA] bg-[#111A21] border-1" />
          </div>
          <div>
            <p className=" font-semibold text-lg my-[15px]">
              Where is your team based?
            </p>
            <hr className="dark:bg-[#CACACA] bg-[#111A21] border-1" />
          </div>
          <div>
            <p className=" font-semibold text-lg my-[15px]">
              What is your web design process like?
            </p>
            <hr className="dark:bg-[#CACACA] bg-[#111A21] border-1" />
          </div>
          <div>
            <p className=" font-semibold text-lg my-[15px]">
              What will my project cost?
            </p>
            <hr className="dark:bg-[#CACACA] bg-[#111A21] border-1" />
          </div>
          <div>
            <p className=" font-semibold text-lg my-[15px]">
              Do you offer website maintenance?
            </p>
            <hr className="dark:bg-[#CACACA] bg-[#111A21] border-1" />
          </div>
          <div>
            <p className=" font-semibold text-lg my-[15px]">
              How can I get an estimate for my project?
            </p>
            <hr className="dark:bg-[#CACACA] bg-[#111A21] border-1" />
          </div>
          <div>
            <p className=" font-semibold text-lg my-[15px]">
              What industries or types of clients do you work with?
            </p>
            <hr className="dark:bg-[#CACACA] bg-[#111A21] border-1" />
          </div>
          <div>
            <p className=" font-semibold text-lg my-[15px]">
              Can you fix my existing website?
            </p>
            <hr className="dark:bg-[#CACACA] bg-[#111A21] border-1" />
          </div>
          <div>
            <p className=" font-semibold text-lg my-[15px]">
              Who will be working on my project?
            </p>
            <hr className="dark:bg-[#CACACA] bg-[#111A21] border-1" />
          </div>
          <div>
            <p className=" font-semibold text-lg my-[15px]">
              Do you offer search engine optimization services?
            </p>
            <hr className="dark:bg-[#CACACA] bg-[#111A21] border-1" />
          </div>
          <div>
            <p className=" font-semibold text-lg my-[15px]">
              Do you use templates in your web design and development?
            </p>
            <hr className="dark:bg-[#CACACA] bg-[#111A21] border-1" />
          </div>
          <div>
            <p className=" font-semibold text-lg my-[15px]">
              DDo you offer any digital marketing agency services?
            </p>
            <hr className="dark:bg-[#CACACA] bg-[#111A21] border-1" />
          </div>
          <div>
            <p className=" font-semibold text-lg my-[15px]">
              What website platforms do you work with?
            </p>
            <hr className="dark:bg-[#CACACA] bg-[#111A21] border-1" />
          </div>
          <div>
            <p className=" font-semibold text-lg my-[15px]">
              Do you work with WordPress templates?
            </p>
            <hr className="dark:bg-[#CACACA] bg-[#111A21] border-1" />
          </div>
        </div>
      </div>
      {/* <div>
                <div className="  flex flex-col items-center mt-[70px]">
                    <h5 className=" text-xs font-light mb-4 tracking-widest">OUR BLOG</h5>
                    <h2 className=" text-primary-dark mb-7 dark:text-white text-[50px] font-medium">Posts <i className="text-[#111111] font-thin"> & Articles</i></h2>
                    <p className=" text-[#111111] text-base font-light mb-[62px]">Web design Post</p>
                </div>
                <div className=" gap-8 flex">
                    <div>
                        <Image src={post1} alt="post1" className=" rounded-[30px]" />
                        <div className=" flex justify-between my-4">
                            <a href="" className=" text-primary-dark  dark:text-primary-grey py-[9px] px-[13px] bg-[#111111]">Design</a>
                            <div className=" text-base font-light flex items-center">
                                <Image src={avatar} alt="avtar" className=" w-[18px] h-[18px]" />
                                <p className=" ml-2 mr-[17px] dark:text-primary-dark">John Doe</p>
                                <p className=" text-secondary-cold dark:text-primary-grey">Oct 28</p>
                            </div>
                        </div>
                        <h4 className=" font-medium text-[32px] mb-4 text-secondary-dark dark:text-secondary-light">World Through Creativity</h4>
                        <p className=" text-base font-light dark:text-primary-grey text-secondary-cold mb-6">Design is the force behind the transformation of ideas.</p>
                    </div>
                    <div>
                        <Image src={post2} alt="post1" className=" rounded-[30px]" />
                        <div className=" flex justify-between my-4">
                            <a href="" className=" text-primary-dark  dark:text-primary-grey py-[9px] px-[13px] bg-[#111111]">Design</a>
                            <div className=" text-base font-light flex items-center">
                                <Image src={avatar} alt="avtar" className=" w-[18px] h-[18px]" />
                                <p className=" ml-2 mr-[17px] dark:text-primary-dark">John Doe</p>
                                <p className=" text-secondary-cold dark:text-primary-grey">Oct 28</p>
                            </div>
                        </div>
                        <h4 className=" font-medium text-[32px] mb-4 text-secondary-dark dark:text-secondary-light">From Pencil to Pixel</h4>
                        <p className=" text-base font-light dark:text-primary-grey text-secondary-cold mb-6">Captivating narrative that reflects the ever-changing landscape of creativity.</p>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default Faqs;
