import Button from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { motion } from "framer-motion";


const SKILLS = [
  {
    title: "Web Design",
    description:
      "We offer professional web design services that are tailored to meet the needs of your business. Our team of experts will work with you to create a website that is visually appealing, user-friendly, and optimized for search engines.",
  },
  {
    title: "Digital Marketing",
    description:
      "Our digital marketing services are designed to help you reach your target audience and drive traffic to your website. We offer a range of services, including search engine optimization, pay-per-click advertising, and social media marketing.",
  },
  {
    title: "Social Media Management",
    description:
      "Our social media management services are designed to help you build and maintain a strong online presence. We will work with you to create a social media strategy that is tailored to meet the needs of your business.",
  },
  {
    title: "Web Design",
    description:
      "We offer professional web design services that are tailored to meet the needs of your business. Our team of experts will work with you to create a website that is visually appealing, user-friendly, and optimized for search engines.",
  },
  {
    title: "Digital Marketing",
    description:
      "Our digital marketing services are designed to help you reach your target audience and drive traffic to your website. We offer a range of services, including search engine optimization, pay-per-click advertising, and social media marketing.",
  },
  {
    title: "Social Media Management",
    description:
      "Our social media management services are designed to help you build and maintain a strong online presence. We will work with you to create a social media strategy that is tailored to meet the needs of your business.",
  },
];

function WhatWeDoSection() {
  return (
    <div>
      <div className="p-section py-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-9">
          <div>
            <Heading subtitle="what we do" title="Our" span="Skills" />
            <p className="mt-10">
              We are a team of professionals who are dedicated to providing the
              best services to our clients. We offer a wide range of services
              that are designed to help you achieve your goals. Whether you need
              help with web design, digital marketing, or social media
              management, we have the expertise to help you succeed.
            </p>
            <Button className="mt-6">View our work</Button>
          </div>
          <div className="md:col-span-2">
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {SKILLS.map((skill, index) => (
                <div key={index}>
                  <SkillCard
                    title={skill.title}
                    description={skill.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDoSection;

type Props = {
  title: string;
  description: string;
};
function SkillCard({ title, description }: Props) {
  return (
    <div className="relative">
      <div className="z-20 top-0 left-0 right-0 bottom-0 bg-white/10 rounded-md cursor-pointer border border-white/60 p-4 shadow-md h-full hover:scale-105 duration-200">
        <div className="relative bg-primary w-40 h-40 rounded-full m-auto mt-20 blur z-10 inset-0"></div>
        <h3 className="text-xl font-bold mb-4 text-primary">{title}</h3>
        <p className="">{description}</p>
      </div>
    </div>
  );
}
