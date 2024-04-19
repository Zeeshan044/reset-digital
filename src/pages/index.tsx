import HomeExpertise from "@/components/pages/home/home-expertise";
import Foundation from "@/components/pages/home/home-foundation";
import About from "@/components/pages/home/home-about";
import PartnerSection from "@/components/pages/partner-section";
import Reviews from "@/components/pages/reviews-section";
import Skills from "@/components/pages/home/home-skills";
import Faqs from "@/components/pages/faq-section";
import CTASection from "@/components/pages/cta-section";
import LoadingHOC from "@/components/hoc/loading-hoc";

const Home = () => {
  return (
    <div className="container-custom-xxl overflow-hidden">
      <About />
      <Foundation />
      <HomeExpertise />
      {/* <PartnerSection /> */}
      <Reviews />
      <Skills />
      <Faqs />
      <CTASection />
    </div>
  );
};

export default LoadingHOC(Home);
