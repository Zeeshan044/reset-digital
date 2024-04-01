import React from "react";
import AppNav from "@/components/layout/app-nav";
import AboutHero from "@/components/AboutHero";
import PartnerSection from "@/components/pages/partner-section";
import DiscoveryStory from "@/components/DiscoverStory";
import Skills from "@/components/Skills";
import Reviews from "@/components/pages/reviews-section";
import Footer from "@/components/Footer";
import AboutValues from "@/components/AboutValues";
import GetInTouchABout from "@/components/GetInTouchABout";
import { ScrollerMotion } from "scroller-motion";
const About = () => {
  return (
    <ScrollerMotion>
      <main className="min-h-screen bg-background dark:bg-background">
        <div className="container-custom">
          <AppNav />
          <AboutHero />
          <PartnerSection />
          <DiscoveryStory />
          <AboutValues />
          <Skills />
          <Reviews />
          <GetInTouchABout />
          <Footer />
        </div>
      </main>
    </ScrollerMotion>
  );
};

export default About;
