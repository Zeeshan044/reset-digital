import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const ChooseServices = () => {
  return (
    <div className=" ">
      <div className="border border-primary-dark">
        <div className="flex flex-col items-center py-12">
          <h2 className="text-5xl font-bold mb-2">
            TAKE THE <span className="font-thin text-primary"> FIRST STEP</span>
          </h2>
          <p className="  text-2xl font-medium">
            Choose the plan best suited for your needs.
          </p>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            <button className="bg-primary rounded-full py-3 px-6 text-secondary-dark mt-8">
              Start With Us Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseServices;
