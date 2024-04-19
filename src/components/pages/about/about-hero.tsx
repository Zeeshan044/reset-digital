import React from "react";
import fadeInMotion from "@/components/hoc/fade-in-motion";

const AboutHero = () => {
  return (
    <div className="p-section relative h-[calc(100vh-80px)] max-h-[700px] flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 object-cover hidden md:block"
        autoPlay
        loop
      >
        <source
          src="https://videos.pexels.com/video-files/7075990/7075990-uhd_4096_2160_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="text-white text-4xl sm:text-7xl lg:text-9xl flex gap-24 relative z-10">
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
