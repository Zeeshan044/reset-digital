import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetInTouchABout from "@/components/GetInTouchABout";
import Packages from "@/components/Packages";

const About = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-[#1D2025]">
            <div className="custom-container">
                <Navbar />
                <Packages />
                {/* <GetInTouchABout /> */}
                <Footer />
            </div>
        </main>
    );
};

export default About;
