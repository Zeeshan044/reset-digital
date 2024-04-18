import WebImg from "@/assets/images/web-design-service-page.png";
import BrandImg from "@/assets/images/brand-identity-Service-page.png";
import DevelopmentImg from "@/assets/images/development-service-page.jpg";
import SeoImg from "@/assets/images/seo-service-page.jpg";
import GrowImg from "@/assets/images/manage-and-grow-service page.jpg";

const SERVICES = [
  {
    title: "Web Design",
    description:
      "Our web design service goes beyond aesthetics to deliver a user experience that captures and retains visitor attention. We specialize in creating websites that balance beauty with functionality, making every interaction a step towards client conversion.",
    number: "01",
    image: WebImg.src,
    reversed: false,
  },
  {
    title: "Brand Identity",
    description:
      "Let us sculpt your brand identity with designs that tell your story and resonate with your audience. Our approach intertwines your brand's ethos with visual elements that speak volumes, building a cohesive and memorable identity.",
    number: "02",
    image: BrandImg.src,
    reversed: true,
  },
  {
    title: "Development",
    description:
      "Transforming designs into dynamic, user-friendly websites is our forte. We provide custom web development solutions that ensure your site is accessible, responsive, and primed for engagement across all browsers and devices.",
    number: "03",
    image: DevelopmentImg.src,
    reversed: false,
  },
  {
    title: "SEO",
    description:
      "Gain visibility where it counts. Our SEO strategies are customized to put your brand in the spotlight, improving your search engine rankings and driving organic traffic to your site with content that’s as insightful as it is SEO-friendly.",
    number: "04",
    image: SeoImg.src,
    reversed: true,
  },
  {
    title: "AdSense Optimization",
    description:
      "Maximize your revenue with our AdSense expertise. We integrate and optimize Google AdSense for your site, balancing profitability with user experience to deliver effective ad placements that earn without intrusion.",
    number: "05",
    image: GrowImg.src,
    reversed: false,
  },
  {
    title: "Tailored Solutions",
    description:
      "Your business challenges are unique, and so are our solutions. We offer tailored services that range from custom integrations to strategic consultations, ensuring every digital need is met with precision and innovation.",
    number: "06",
    image: GrowImg.src,
    reversed: true,
  },
];

export default SERVICES;
