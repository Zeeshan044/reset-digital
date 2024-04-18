import React, { useEffect } from "react";
import AboutHero from "@/components/pages/about/about-hero";
import PartnerSection from "@/components/pages/partner-section";
import DiscoveryStory from "@/components/pages/about/discover-story";
import Reviews from "@/components/pages/reviews-section";
import AboutValues from "@/components/AboutValues";
import CTASection from "@/components/pages/cta-section";
import WhatWeDoSection from "@/components/pages/about/what-we-do";
import DummyLoading from "@/components/ui/dummy-loading";
const About = () => {
  return (
    <div className="container-custom-xxl">
      <DummyLoading />
      <AboutHero />
      <div className="mt-24" />
      {/* <PartnerSection /> */}
      {/* <AboutValues /> */}
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

export default About;
