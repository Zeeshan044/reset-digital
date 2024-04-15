import React from "react";
import AboutHero from "@/components/pages/about/about-hero";
import PartnerSection from "@/components/pages/partner-section";
import DiscoveryStory from "@/components/pages/about/discover-story";
import Reviews from "@/components/pages/reviews-section";
import AboutValues from "@/components/AboutValues";
import CTASection from "@/components/pages/cta-section";
import WhatWeDoSection from "@/components/pages/about/what-we-do";
const About = () => {
  return (
    <>
      <AboutHero />
      <div className="mt-24" />
      <PartnerSection />
      {/* <AboutValues /> */}
      <WhatWeDoSection />
      <DiscoveryStory />
      <Reviews />
      <CTASection />
    </>
  );
  {
    /* <GetInTouchABout /> */
  }
};

export default About;
