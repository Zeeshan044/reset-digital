import AboutHero from "@/components/pages/about/about-hero";
import DiscoveryStory from "@/components/pages/about/discover-story";
import Reviews from "@/components/pages/reviews-section";
import CTASection from "@/components/pages/cta-section";
import WhatWeDoSection from "@/components/pages/about/what-we-do";
import LoadingHOC from "@/components/hoc/loading-hoc";
import Heading from "@/components/ui/heading";
import Lottie from "lottie-react";
import AboutLottieData from "@/assets/lottie/about-us-animation.json";

const About = () => {
  return (
    <div className="container-custom-xxl">
      <AboutHero />
      <div className="mt-24" />
      <div className="p-section py-24">
        <Heading
          subtitle="our pledge"
          title="Digital Excellence"
          span="Redefined"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 items-center">
          <div className="mt-8">
            <p>
              At Reset Digital, our ethos is simple: every website we craft is a
              bridge connecting your brand to your audience, built on the
              pillars of integrity, transparency, and a relentless pursuit of
              excellence. This journey with each client goes beyond
              business—it&apos;s a relationship founded on shared visions and
              mutual success. Our devotion shines through in every user
              interface we design, every line of code we write, and every
              digital strategy we implement
            </p>
            <p className="mt-2">
              We are dedicated to your enduring success in the digital realm.
              Our focus on retention strategies is designed to ensure your
              website not only attracts but consistently engages and retains
              visitors. Our expert team conducts ongoing performance analytics
              and leverages the latest SEO advancements to adapt and refine your
              content and search strategies. This proactive approach helps
              maintain a vibrant, interactive user experience that keeps your
              audience invested and involved. By fostering a cycle of continuous
              improvement, we help secure your brand&apos;s position as a leader
              in your industry, enhancing both visibility and operational
              excellence.
            </p>
          </div>
          <div className="justify-center flex">
            <Lottie animationData={AboutLottieData} className="w-96" />
          </div>
        </div>
      </div>
      <WhatWeDoSection />
      <DiscoveryStory />
      <Reviews />
      <CTASection />
    </div>
  );
  {
    /* <GetInTouchABout /> */
  }
};

export default LoadingHOC(About);
