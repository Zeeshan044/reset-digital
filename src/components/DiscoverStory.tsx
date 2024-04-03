import React from "react";
import discoverImg from "@/assets/images/discover.png";
import Foundation from "@/assets/images/foundation1.svg";
import Image from "next/image";
const DiscoveryStore = () => {
  return (
    <div className="container-custom-sm py-24">
      <div className="font-light grid md:grid-cols-2 gap-y-8 gap-x-24 mb-12">
        <div>
          <h5 className="text-xs font-light tracking-widest">GET TO KNOW</h5>
          <p className=" text-base mt-4">
            Welcome to Reset Digital, your dedicated partnerin web design and
            digital transformation. At the intersection of creativity and
            purpose, we bring ideas to life with a focus on showcasing unique
            features and enhancing visibility. What sets us apart is our
            client-centric approach - at Reset Digital, your vision is our
            priority. Join us on a journey where innovation meets purpose, and
            let&apos;s craft digital brilliance together.
          </p>
        </div>
        <div className="row-start-1 md:row-start-auto">
          <h2 className="text-6xl font-medium pr-20">
            Discover{" "}
            <i className="bg-primary text-primary-foreground whitespace-nowrap">
              Our Story
            </i>
          </h2>
        </div>
      </div>
      <div className="flex items-start justify-between gap-10">
        <div className="aspect-square shrink-0 hidden sm:block">
          <Image
            src={discoverImg}
            alt=""
            className="h-full w-full object-cover rounded-[20px]"
          />
        </div>
        <div className=" font-light text-base   gap-[26px] ">
          <p className=" mb-[26px]">
            Founded in 2024, Reset Digital was born out of a shared love for
            design, technology, and the limitless possibilities of the web.
          </p>
          <p className=" mb-[26px]">
            We started as a small group of individuals who believed in the power
            of the internet to shape businesses and create meaningful online
            experiences.
          </p>
          <p className=" mb-[26px]">
            From our humble beginnings in a cozy office space, we&apos;ve grown
            into a dynamic and highly skilled team of experts, united by the
            common goal of making the web a better place, one pixel at a time.
          </p>
          <p className="">
            Our dedication to quality, innovation, and collaboration has been
            the driving force behind our success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryStore;
