import React from "react";
import discoverImg from "@/assets/images/discover-our-story.jpg";
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
            Founded in 2023, Reset Digital emerged from a profound passion for
            design, the transformative power of technology, and the boundless
            potential of the web. What began as a collective of visionary
            individuals with a shared ambition has evolved into a formidable
            ensemble of professionals.
          </p>
          <p>
            We are a dynamic and highly skilled team, each member a specialist
            in their craft, working in unison to redefine the standards of
            digital excellence.
          </p>
          <p>
            As we grew from our foundational roots, so did our resolve to
            convert digital challenges into opportunities for our clients. Every
            step we&apos;ve taken has been a stride towards realizing the
            visions of those we serve, ensuring that each project is a testament
            to our unwavering commitment to innovation, collaboration, and
            digital craftsmanship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default fadeInMotion(DiscoveryStore);
