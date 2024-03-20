import React from "react";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import Trusted from "@/components/Trusted";
import DiscoveryStory from "@/components/DiscoverStory";
import Skills from "@/components/Skills";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import AboutValues from "@/components/AboutVAlues";
import StartProject from "@/components/StartProject";
import GetInTouchABout from "@/components/GetInTouchABout";
import OurTeam from "@/components/OurTeam";

const About = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gradient-dark">
      <div className="custom-container">
        <Navbar />
        <AboutHero />
        <Trusted />
        <DiscoveryStory />
        {/* <OurTeam /> */}
        <AboutValues />
        <Skills />
        <Reviews />
        <GetInTouchABout />
        <Footer />
      </div>
    </main>
  );
};

export default About;
