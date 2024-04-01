import React from "react";
import fadeInMotion from "../../hoc/fade-in-motion";

const ExpertiseData = [
  {
    title: "DESIGN",
    description:
      "A passion for design that leaves a lasting impact with your audience.",
  },
  {
    title: "BRANDING",
    description: "The art of shaping perceptions, emotions, and experiences.",
  },
  {
    title: "SEO",
    description:
      "Showcasing the core features and improving your idea's visibility and performance",
  },
];

const HomeExpertise = () => {
  return (
    <div className=" max-w-5xl mx-auto items-center">
      <div className="pt-20 pb-[112px]">
        <div className="flex ">
          <div className="font-light max-w-sm">
            <h5 className="text-xs text-body mb-4 tracking-[8px] uppercase ">
              Imagine & Design
            </h5>
            <p className="text-base text-body tracking-wide">
              From brand development to captivating user experiences, We
              specialize in turning concepts into compelling realities.
            </p>
          </div>
          <div>
            <h2 className="text-6xl mt-3 text-body">
              We Create{" "}
              <i className="bg-primary text-primary-foreground">Experiences</i>
            </h2>
          </div>
        </div>
        <div className="flex justify-between gap-8 mt-20">
          {ExpertiseData.map((expertise, index) => (
            <ExpertiseCard
              key={index}
              title={expertise.title}
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
}

function ExpertiseCard({ title, description }: ExpertiseCardProps) {
  return (
    <div className="px-9 pt-[310px] pb-[60px] rounded-[32px] bg-[#BFBEBF] dark:bg-card w-[360px]">
      <h4 className="text-[32px] font-semibold mb-4 dark:text-secondary-light text-primary">
        {title}
      </h4>
      <p className="text-base font-light text-body  text-secondary-dark">
        {description}
      </p>
    </div>
  );
}

export default fadeInMotion(HomeExpertise);
