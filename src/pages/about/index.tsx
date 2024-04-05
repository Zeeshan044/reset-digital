import React from "react";
import AppNav from "@/components/layout/app-nav";
import AboutHero from "@/components/AboutHero";
import PartnerSection from "@/components/pages/partner-section";
import DiscoveryStory from "@/components/DiscoverStory";
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
