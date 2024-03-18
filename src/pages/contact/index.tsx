import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

const About = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-[#1D2025]">
            <div className="custom-container">
                <Navbar />
                <ContactUs />
                <Footer />
            </div>
        </main>
    );
};

export default About;
