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

const Home = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gradient-dark">
      <div>
        <Navbar />
        <HomeAbout />
        <Foundation />
        <Cards />
        <Trusted />
        {/* <Portfolio /> */}
        <Reviews />
        <Skills />
        <Faqs />
        <StartProject />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
