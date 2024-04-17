import React from "react";
import discoverImg from "@/assets/images/discover.png";
import Image from "next/image";
import Heading from "../../ui/heading";
import fadeInMotion from "@/components/hoc/fade-in-motion";
const DiscoveryStore = () => {
  return (
    <div className="p-section py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="aspect-video shrink-0 hidden lg:block relative w-full">
        <Image src={discoverImg} alt="" fill className="object-cover" />
      </div>
      <div className="font-light flex flex-col gap-y-8">
        <div className="row-start-1 md:row-start-auto">
          <Heading subtitle="Get to know" title="Discover" span="Our Story" />{" "}
        </div>
        <div className="aspect-video shrink-0 lg:hidden relative w-full">
          <Image src={discoverImg} alt="" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-y-4">
          <p>
            Welcome to Reset Digital, your dedicated partnerin web design and
            digital transformation. At the intersection of creativity and
            purpose, we bring ideas to life with a focus on showcasing unique
            features and enhancing visibility. What sets us apart is our
            client-centric approach - at Reset Digital, your vision is our
            priority. Join us on a journey where innovation meets purpose, and
            let&apos;s craft digital brilliance together.
          </p>
          <p>
            Founded in 2024, Reset Digital was born out of a shared love for
            design, technology, and the limitless possibilities of the web.
          </p>
          <p>
            We started as a small group of individuals who believed in the power
            of the internet to shape businesses and create meaningful online
            experiences.
          </p>
          <p>
            From our humble beginnings in a cozy office space, we&apos;ve grown
            into a dynamic and highly skilled team of experts, united by the
            common goal of making the web a better place, one pixel at a time.
          </p>
          <p>
            Our dedication to quality, innovation, and collaboration has been
            the driving force behind our success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default fadeInMotion(DiscoveryStore);
