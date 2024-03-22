import React from "react";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import Trusted from "@/components/Trusted";
import DiscoveryStory from "@/components/DiscoverStory";
import Skills from "@/components/Skills";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import AboutValues from "@/components/AboutValues";
// import StartProject from "@/components/StartProject";
import GetInTouchABout from "@/components/GetInTouchABout";
// import OurTeam from "@/components/OurTeam";
import FadeInMotion from "@/components/FadeInMotion";
import { ScrollerMotion } from "scroller-motion";
const About = () => {
  return (
    <ScrollerMotion>
      <main className="min-h-screen bg-white dark:bg-gradient-dark">
        <div className="custom-container">
          <Navbar />
          {/* Hero */}
          <FadeInMotion>
            <AboutHero />
          </FadeInMotion>

          {/* Partners */}
          <FadeInMotion>
            <Trusted />
          </FadeInMotion>

          {/* Story */}
          <FadeInMotion>
            <DiscoveryStory />
          </FadeInMotion>

          {/* Values */}
          <FadeInMotion>
            <AboutValues />
          </FadeInMotion>

          {/* Skills */}
          <FadeInMotion>
            <Skills />
          </FadeInMotion>

          {/* Reviews */}
          <FadeInMotion>
            <Reviews />
          </FadeInMotion>

          {/* Get In Touch */}
          <FadeInMotion>
            <GetInTouchABout />
          </FadeInMotion>

          {/* <OurTeam /> */}
          <Footer />
        </div>
      </main>
    </ScrollerMotion>
  );
};

export default About;
