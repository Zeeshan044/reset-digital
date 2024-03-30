import React from "react";
import AppNav from "@/components/layout/app-nav";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import { ScrollerMotion } from "scroller-motion";

const About = () => {
  return (
    <ScrollerMotion>
      <main className="min-h-screen bg-background dark:bg-background-dark">
        <div className="custom-container">
          <AppNav />
          <ContactUs />
          <Footer />
        </div>
      </main>
    </ScrollerMotion>
  );
};

export default About;
