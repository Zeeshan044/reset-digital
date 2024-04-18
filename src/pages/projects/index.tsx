import React from "react";
import AppNav from "@/components/layout/app-nav";
import Footer from "@/components/layout/app-footer";
import GetInTouchABout from "@/components/GetInTouchABout";
import Projects from "@/components/Projects";

const About = () => {
  return (
    <main className="min-h-screen bg-background dark:bg-background">
      <div className="container-custom-xxl">
        <AppNav />
        <Projects />
        <GetInTouchABout />
        <Footer />
      </div>
    </main>
  );
};

export default About;
