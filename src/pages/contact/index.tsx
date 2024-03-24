import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import { ScrollerMotion } from "scroller-motion";

const About = () => {
  return (
    <ScrollerMotion>
      <main className="min-h-screen bg-white dark:bg-secondary-dark">
        <div className="custom-container">
          <Navbar />
          <ContactUs />
          <Footer />
        </div>
      </main>
    </ScrollerMotion>
  );
};

export default About;
