import React from "react";
import HomeExpertise from "@/components/pages/home/home-expertise";
import Foundation from "@/components/pages/home/home-foundation";
import About from "@/components/pages/home/home-about";
import PartnerSection from "@/components/pages/partner-section";
import Reviews from "@/components/pages/reviews-section";
import Skills from "@/components/Skills";
import Faqs from "@/components/Faqs";
import StartProject from "@/components/StartProject";

const Home = () => {
  return (
    <>
      <About />
      <Foundation />
      <HomeExpertise />
      <PartnerSection />
      <Reviews />
      <Skills />
      <Faqs />
      <StartProject />
    </>
  );
};

export default Home;
