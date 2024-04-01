import Image from "next/image";
import React from "react";
import AboutImg from "@/assets/images/AboutValue.png";
import Box1 from "@/assets/images/box1st.png";
import Box2 from "@/assets/images/box2nd.png";
import Box3 from "@/assets/images/box3rd.png";
import Box4 from "@/assets/images/boxlast.png";
import foundation from "@/assets/images/foundation.png";

const AboutValues = () => {
  return (
    <div className="container-custom-sm  dark:text-white">
      <div className="flex justify-between mb-[80px]">
        <h2 className="text-6xl font-medium mt-14">
          Our <i className="text-primary font-thin">Values</i>
        </h2>
        <div className="font-light w-[331px]  ">
          <h2 className="text-xs tracking-widest ">WHAT WE BELIEVE</h2>
          <p className="text-base mt-4  ">
            The client is paramount, and we prioritize dedicated support for our
            clients. Welcome to the forefront of exceptional service at Reset
            Digital.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center my-20 ">
        <div className="flex justify-center items-center font-archia">
          <h2 className=" text-2xl font-medium ">Foundation of Our work</h2>
        </div>
        <div className="flex justify-between gap-[19px]  mt-[66px]  font-archia">
          <div className="flex flex-col justify-between ml-10">
            <div className=" font-medium mt-[40px] ">
              <h2 className=" text-[25px]">Functionality</h2>
              <p className=" text-[13px] dark:text-white/60 text-primary-faq">
                Designs that serve a purpose
              </p>
            </div>
            <div className=" font-medium mb-16">
              <h2 className=" text-[25px]">Simplicity</h2>
              <p className=" text-[13px] dark:text-white/60 text-primary-faq">
                Complexity surfaced only when nessesery
              </p>
            </div>
          </div>
          <Image src={foundation} alt="" width={536} height={523} />
          <div className=" font-medium mt-[35px]">
            <h2 className=" text-[25px]">Emotion</h2>
            <p className=" text-[13px] dark:text-white/60 text-primary-faq">
              Products with a character & solutions optimized for emotion
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8">
        <div>
          <div className="bg-card   font-light p-8 rounded-[29px]">
            <Image src={Box1} alt="" />
            <h5 className="text-secondary-light text-xs mt-4">HARDWORK</h5>
            <p className="  text-sm">
              The client is paramount, and we prioritize dedicated support for
              our clients. Welcome to the forefront of exceptional service at
              Reset Digital.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-card   font-light p-8 rounded-[29px]">
            <Image src={Box2} alt="" />
            <h5 className="text-secondary-light text-xs mt-4">INNOVATION</h5>
            <p className="  text-sm">
              I am very sorry for the pain, it will be followed.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-card   font-light p-8 rounded-[29px]">
            <Image src={Box3} alt="" />
            <h5 className="text-secondary-light text-xs mt-4">GROWTH</h5>
            <p className="  text-sm">
              I am very sorry for the pain, it will be followed.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-card   font-light p-8 rounded-[29px]">
            <Image src={Box4} alt="" />
            <h5 className="text-secondary-light text-xs mt-4">TEAMWORK</h5>
            <p className="  text-sm">
              I am very sorry for the pain, it will be followed.
            </p>
          </div>
        </div>
      </div>

      {/* s */}
    </div>
  );
};

export default AboutValues;
