import React from "react";
import Lottie from "lottie-react";
import animationData from "@/assets/lottie/loading-animation.json";

const LoadingAnimation = () => {
  return (
    <div className="fixed bg-background inset-0 z-50 flex items-center justify-center">
      <div className="h-28 lg:h-40 aspect-square relative">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default LoadingAnimation;
