import React from "react";
import HomeExpertise from "@/components/pages/home/home-expertise";
import Foundation from "@/components/pages/home/home-foundation";
import About from "@/components/pages/home/home-about";
import AppNav from "@/components/layout/app-nav";
import PartnerSection from "@/components/pages/partner-section";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/pages/reviews-section";
import Skills from "@/components/Skills";
import Faqs from "@/components/Faqs";
import StartProject from "@/components/StartProject";
import Footer from "@/components/Footer";
import fadeInMotion from "@/components/hoc/fade-in-motion";
import { ScrollerMotion } from "scroller-motion";

const Home = () => {
  return (
    <ScrollerMotion>
      <main className="min-h-screen bg-white dark:bg-background">
        <div>
          <AppNav />
          <About />
          <Foundation />
          <HomeExpertise />
          <PartnerSection />
          <Reviews />
          <Skills />
          <Faqs />
          <StartProject />
          <Footer />
        </div>
      </main>
    </ScrollerMotion>
  );
};

export default Home;
