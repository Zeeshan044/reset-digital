import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetInTouchABout from "@/components/GetInTouchABout";
import Projects from "@/components/Projects";

const About = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-secondary-dark">
            <div className="custom-container">
                <Navbar />
                <Projects />
                <GetInTouchABout />
                <Footer />
            </div>
        </main>
    );
};

export default About;
