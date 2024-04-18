import React from "react";
// import AboutVideo from "@/assets/video/about-video.mp4";
import Image from "next/image";
import fadeInMotion from "@/components/hoc/fade-in-motion";

const AboutHero = () => {
  return (
    <div className="p-section relative">
      <video className="w-full rounded-2xl hidden md:block" autoPlay loop>
        <source
          src="https://videos.pexels.com/video-files/7075990/7075990-uhd_4096_2160_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-7xl lg:text-9xl flex gap-24 mt-8 mb-8 ">
        <h1 className="font-medium">ABOUT</h1>
        <div>
          <div className="text-primary font-thin font-inter italic after:content-['US'] after:absolute relative after:left-2">
            US
          </div>
        </div>
      </div>
    </div>
  );
};

export default fadeInMotion(AboutHero);
