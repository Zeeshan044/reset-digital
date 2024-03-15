import React from "react";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import Trusted from "@/components/Trusted";
import DiscoveryStory from "@/components/DiscoveryStory";
import Skills from "@/components/Skills";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import OurValues from "@/components/OurValues";
import AbotVAlues from "@/components/AboutVAlues";

const About = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-[#1D2025]">
      <div className="custom-container">
        <Navbar />
        <AboutHero />
        <Trusted />
        <DiscoveryStory />
        <AbotVAlues />
        <Skills />
        <Reviews />
        <Footer />
      </div>
    </main>
  );
};

export default About;
