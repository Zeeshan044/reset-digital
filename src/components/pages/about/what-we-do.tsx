import fadeInMotion from "@/components/hoc/fade-in-motion";
import Button from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import SKILLS from "@/data/skills";

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
          </div>
          <div className="md:col-span-2 relative">
            {/* <div className="absolute h-96 w-96 right-1/2 top-8 translate-x-3/4 rounded-full bg-blue-700/60 blur-[100px]"></div> */}
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
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

export default fadeInMotion(WhatWeDoSection);

type Props = {
  title: string;
  description: string;
};
function SkillCard({ title, description }: Props) {
  return (
    <div className="bg-white/10 backdrop-blur-lg cursor-pointer border border-white/60 p-4 shadow-md hover:scale-105 duration-200 h-full">
      <h3 className="text-xl font-bold mb-4 text-primary">{title}</h3>
      <p className="line-clamp-6">{description}</p>
    </div>
  );
}
