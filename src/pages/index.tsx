import React from "react";
import HomeExpertise from "@/components/pages/home/home-expertise";
import Foundation from "@/components/pages/home/home-foundation";
import About from "@/components/pages/home/home-about";
import PartnerSection from "@/components/pages/partner-section";
import Reviews from "@/components/pages/reviews-section";
import Skills from "@/components/pages/home/home-skills";
import Faqs from "@/components/pages/faq-section";
import StartProject from "@/components/pages/cta-section";

const Home = () => {
  return (
    <>
      <About />
      {/* <Foundation /> */}
      <HomeExpertise />
      <PartnerSection />
      {/* <Reviews /> */}
      <Skills />
      <Faqs />
      <StartProject />
    </>
  );
};

export default Home;
