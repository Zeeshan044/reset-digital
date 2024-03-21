import React, { useEffect, useState } from "react";
import Cards from "@/components/Cards";
import Foundation from "@/components/Foundation";
import HomeAbout from "@/components/HomeAbout";
import Navbar from "@/components/Navbar";
import Trusted from "@/components/Trusted";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Skills from "@/components/Skills";
import Faqs from "@/components/Faqs";
import StartProject from "@/components/StartProject";
import Footer from "@/components/Footer";
import FadeInMotion from "@/components/FadeInMotion";
import { ScrollerMotion } from "scroller-motion";

const Home = () => {
  return (
    <ScrollerMotion>
      <main className="min-h-screen bg-white dark:bg-gradient-dark">
        <div>
          <Navbar />
          {/* About */}
          <FadeInMotion>
            <HomeAbout />
          </FadeInMotion>
          {/* Foundation */}
          <FadeInMotion>
            <Foundation />
          </FadeInMotion>
          {/* Cards */}
          <FadeInMotion>
            <Cards />
          </FadeInMotion>
          {/* Trusted */}
          <FadeInMotion>
            <Trusted />
          </FadeInMotion>
          {/* Reviews */}
          <FadeInMotion>
            <Reviews />
          </FadeInMotion>
          {/* Skills */}
          <FadeInMotion>
            <Skills />
          </FadeInMotion>
          {/* Faqs */}
          <FadeInMotion>
            <Faqs />
          </FadeInMotion>
          {/* CTA */}
          <FadeInMotion>
            <StartProject />
          </FadeInMotion>

          {/* <Portfolio /> */}

          <Footer />
        </div>
      </main>
    </ScrollerMotion>
  );
};

export default Home;
