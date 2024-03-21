import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import ServiceAbout from "@/components/ServiceAbout";
import WebService from "@/components/WebService";
import LogoService from "@/components/LogoService";
import SeoService from "@/components/SeoService";
import ChooseServices from "@/components/ChooseServices";
import GetInTouchABout from "@/components/GetInTouchABout";

const Home = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-secondary-dark">
            <div className=" custom-container">
                <Navbar />
                <ServiceAbout />
                <WebService />
                <LogoService />
                <SeoService />
                <ChooseServices />
                <Reviews />
                <GetInTouchABout />
                <Footer />
            </div>
        </main>
    );
};

export default Home;
