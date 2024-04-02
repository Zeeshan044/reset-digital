import React from "react";
import fadeInMotion from "../../hoc/fade-in-motion";
import Image, { StaticImageData } from "next/image";
import Image1 from "@/assets/images/design-3d.png";
import Image2 from "@/assets/images/branding-3d.png";
import Image3 from "@/assets/images/seo-3d.png";

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
    <div className="max-w-5xl mx-auto px-8 lg:px-0 items-center">
      <div className="py-20">
        <div className="flex justify-between flex-wrap-reverse gap-y-8">
          <div className="font-light max-w-sm">
            <h5 className="text-xs mb-4 tracking-[8px] uppercase ">
              Imagine & Design
            </h5>
            <p className="text-base tracking-wide">
              From brand development to captivating user experiences, We
              specialize in turning concepts into compelling realities.
            </p>
          </div>
          <div>
            <h2 className="text-5xl md:text-6xl mt-3">
              We Create{" "}
              <i className="bg-primary text-primary-foreground whitespace-nowrap">
                Experiences
              </i>
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 lg:mt-20">
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
    <div className="px-9 pt-8 pb-14 rounded-[32px] bg-card">
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
