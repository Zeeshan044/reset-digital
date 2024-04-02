import React from "react";
import AppNav from "@/components/layout/app-nav";
import Footer from "@/components/layout/app-footer";
import GetInTouchABout from "@/components/GetInTouchABout";
import Packages from "@/components/Packages";
import { ScrollerMotion } from "scroller-motion";

const About = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gradient-dark">
      <div className="container-custom">
        <AppNav />
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
