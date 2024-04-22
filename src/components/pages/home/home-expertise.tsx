import React from "react";
import fadeInMotion from "../../hoc/fade-in-motion";
import Image, { StaticImageData } from "next/image";
import Image1 from "@/assets/images/design-3d.png";
import Image2 from "@/assets/images/branding-3d.png";
import Image3 from "@/assets/images/seo-3d.png";
import Heading from "@/components/ui/heading";
import { motion } from "framer-motion";

const ExpertiseData = [
  {
    title: "DESIGN",
    description:
      "A passion for design that leaves a lasting impact with your audience.",
    image: Image1,
  },
  {
    title: "BRANDING",
    description: "The art of shaping perceptions, emotions, and experiences.",
    image: Image2,
  },
  {
    title: "SEO",
    description:
      "Showcasing the core features and improving your idea's visibility and performance",
    image: Image3,
  },
];

const HomeExpertise = () => {
  return (
    <div className="p-section py-20 lg:h-screen lg:max-h-[1000px] flex items-center">
      <div className="flex flex-wrap xl:flex-nowrap gap-8 items-start">
        <div className="flex flex-col gap-8">
          <Heading
            subtitle="Imagine & Design"
            title="We Create"
            span="Experiences"
          />
          <div className="font-light max-w-sm">
            <p className="text-base tracking-wide">
              From brand development to captivating user experiences, We
              specialize in turning concepts into compelling realities.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ExpertiseData.map((expertise, index) => (
            <ExpertiseCard
              key={index}
              title={expertise.title}
              image={expertise.image}
              description={expertise.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ExpertiseCardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

function ExpertiseCard({ title, description, image }: ExpertiseCardProps) {
  return (
    <div className="px-9 pt-8 pb-14 bg-card hover:scale-110 duration-200 cursor-pointer">
      <div className="aspect-square relative mx-auto mb-4">
        <Image
          src={image}
          alt=""
          fill
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <h4 className="text-[32px] font-semibold mb-4 text-primary">{title}</h4>
      <p className="text-base font-light text-secondary-dark">{description}</p>
    </div>
  );
}

export default fadeInMotion(HomeExpertise);
