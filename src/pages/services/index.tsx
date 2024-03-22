import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import ServiceAbout from "@/components/ServiceAbout";
import WebService from "@/components/WebService";
import LogoService from "@/components/LogoService";
import SeoService from "@/components/SeoService";
import ChooseServices from "@/components/ChooseServices";
import GetInTouchABout from "@/components/GetInTouchABout";
import { ScrollerMotion } from "scroller-motion";
import FadeInMotion from "@/components/FadeInMotion";

const Services = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-secondary-dark">
            <div className="custom-container">
                <Navbar />
                {/* About */}
                <FadeInMotion>
                    <ServiceAbout />
                </FadeInMotion>
                {/* Web Services */}
                <FadeInMotion>
                    <WebService />
                </FadeInMotion>
                {/* Logo Services */}
                <FadeInMotion>
                    <LogoService />
                </FadeInMotion>
                {/* SEO Services */}
                <FadeInMotion>
                    <SeoService />
                </FadeInMotion>
                {/* Choose Services */}
                <FadeInMotion>
                    <ChooseServices />
                </FadeInMotion>
                {/* Reviews */}
                <FadeInMotion>
                    <Reviews />
                </FadeInMotion>
                {/* Get In Touch */}
                <FadeInMotion>
                    <GetInTouchABout />
                </FadeInMotion>

                <Footer />
            </div>
        </main>
    );
};

const ServicesPage = () => (
    <ScrollerMotion>
        <Services />
    </ScrollerMotion>
);

export default ServicesPage;
