import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetInTouchABout from "@/components/GetInTouchABout";
import Packages from "@/components/Packages";
import { ScrollerMotion } from "scroller-motion";

const About = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gradient-dark">
      <div className="custom-container">
        <Navbar />
        <Packages />
        {/* <GetInTouchABout /> */}
        <Footer />
      </div>
    </main>
  );
};

const PackagesPage = () => (
  <ScrollerMotion>
    <About />
  </ScrollerMotion>
);

export default PackagesPage;
