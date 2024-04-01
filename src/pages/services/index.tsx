import AppNav from "@/components/layout/app-nav";
import Reviews from "@/components/pages/reviews-section";
import Footer from "@/components/Footer";
import ServiceAbout from "@/components/ServiceAbout";
import WebService from "@/components/WebService";
import LogoService from "@/components/LogoService";
import SeoService from "@/components/SeoService";
import ChooseServices from "@/components/ChooseServices";
import GetInTouchABout from "@/components/GetInTouchABout";
import { ScrollerMotion } from "scroller-motion";

const Services = () => {
  return (
    <main className="min-h-screen bg-background dark:bg-background">
      <div className="custom-container">
        <AppNav />
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

const ServicesPage = () => (
  <ScrollerMotion>
    <Services />
  </ScrollerMotion>
);

export default ServicesPage;
