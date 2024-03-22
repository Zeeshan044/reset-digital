import React from "react";

const Cards = () => {
  return (
    <div className=" max-w-5xl mx-auto items-center">
      <div className=" pt-[80px] pb-[112px]">
        <div className="flex ">
          <div className="font-light">
            <h5 className="text-xs dark:text-secondary-light text-secondary-cold mb-4 tracking-[8px] uppercase ">
              Imagine & Design
            </h5>
            <p className="text-base w-[415px] dark:text-primary-grey text-secondary-dark tracking-wide">
              From brand development to captivating user experiences, We
              specialize in turning concepts into compelling realities.
            </p>
          </div>
          <div>
            <h2 className="text-[55px] mt-3 dark:text-secondary-light text-secondary-cold">
              We Create{" "}
              <i className="text-primary-dark font-thin">Experiences</i>
            </h2>
          </div>
        </div>
        <div className="flex justify-between gap-8 mt-[80px]">
          <div className="px-9 pt-[310px] pb-[60px] rounded-[32px] bg-[#BFBEBF] dark:bg-secondary-box w-[360px]">
            <h4 className="text-[32px] font-semibold mb-4 dark:text-secondary-light text-primary-dark">
              DESIGN
            </h4>
            <p className="text-base font-light dark:text-primary-grey text-secondary-dark">
              A passion for design that leaves a lasting impact with your
              audience.
            </p>
          </div>
          <div className="px-9 pt-[310px] pb-[60px] rounded-[32px] bg-[#BFBEBF] dark:bg-secondary-box w-[360px]">
            <h4 className="text-[32px] font-semibold mb-4 dark:text-secondary-light text-primary-dark">
              BRANDING
            </h4>
            <p className="text-base font-light dark:text-primary-grey text-secondary-dark">
              The art of shaping perceptions, emotions, and experiences.
            </p>
          </div>
          <div className="px-9 pt-[310px] pb-[60px] rounded-[32px] bg-[#BFBEBF] dark:bg-secondary-box w-[360px]">
            <h4 className="text-[32px] font-semibold mb-4 dark:text-secondary-light text-primary-dark">
              SEO
            </h4>
            <p className="text-base font-light dark:text-primary-grey text-secondary-dark">
              Showcasing the core features and improving your idea&apos;s
              visibility and performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
