import Footer from "@/components/Footer";
import AppNav from "@/components/layout/app-nav";

const SECTIONS = [
  {
    title: "Web Design",
    description:
      "We create websites that aren’t just beautiful but also embody the essence of your brand. Powered by Webflow; elevated by our generative and 3D solutions: we will make your vision an awe-inspiring reality.",
    number: "01",
    image:
      "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
    reversed: false,
  },
  {
    title: "Brand Identity",
    description:
      "We create websites that aren’t just beautiful but also embody the essence of your brand. Powered by Webflow; elevated by our generative and 3D solutions: we will make your vision an awe-inspiring reality.",
    number: "02",
    image:
      "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
    reversed: true,
  },
  {
    title: "Development",
    description:
      "We create websites that aren’t just beautiful but also embody the essence of your brand. Powered by Webflow; elevated by our generative and 3D solutions: we will make your vision an awe-inspiring reality.",
    number: "03",
    image:
      "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
    reversed: false,
  },
  {
    title: "SEO",
    description:
      "We create websites that aren’t just beautiful but also embody the essence of your brand. Powered by Webflow; elevated by our generative and 3D solutions: we will make your vision an awe-inspiring reality.",
    number: "04",
    image:
      "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
    reversed: true,
  },
  {
    title: "Manage and Grow",
    description:
      "We create websites that aren’t just beautiful but also embody the essence of your brand. Powered by Webflow; elevated by our generative and 3D solutions: we will make your vision an awe-inspiring reality.",
    number: "05",
    image:
      "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
    reversed: false,
  },
];

const ServicePage2 = () => {
  return (
    <main className="min-h-screen bg-background dark:bg-background-dark">
      <div className="">
        <AppNav />

        {/* Hero Intro */}
        <section className="flex flex-col items-center justify-center py-20 container-custom-sm">
          <h1 className=" text-9xl font-semibold text-center">
            Our <i className="font-thin text-primary">Services</i>
          </h1>
          <p className=" text-center mt-16 text-xl font-light">
            Embark on a creative odyssey with Reset Digital. We create websites
            that aren’t just beautiful but also embody the essence of your
            brand. Powered by Webflow; elevated by our generative and 3D
            solutions: we will make your vision an awe-inspiring reality.
          </p>
        </section>

        {/* Services Section */}
        <section className="container-custom flex flex-col gap-y-40 mt-20">
          {SECTIONS.map((section, index) => (
            <ServiceSectionSlide
              key={section.number}
              title={section.title}
              description={section.description}
              number={section.number}
              image={section.image}
              reversed={section.reversed}
            />
          ))}
        </section>
        <Footer />
      </div>
    </main>
  );
};

export default ServicePage2;

type Props = {
  title: string;
  description: string;
  number: string;
  image: string;
  reversed: boolean;
};

function ServiceSectionSlide({
  title,
  description,
  number,
  image,
  reversed,
}: Props) {
  return (
    <div className="grid grid-cols-2 gap-x-20">
      <div className="relative z-20 pt-16">
        <h2 className="text-5xl font-bold mb-4">{title}</h2>
        <div className="flex flex-col gap-4 leading-relaxed text-lg">
          <p>{description}</p>
        </div>
        <div className="absolute top-0 left-0 text-9xl leading-none font-bold text-white/30 -z-10">
          {number}
        </div>
      </div>
      <div className={`flex ${reversed && "col-start-1 row-start-1"}`}>
        <div className="relative z-20">
          <img src={image} alt="" />
          <div
            className={`h-full w-full absolute top-6 bg-primary -z-10 ${
              reversed ? "-left-6" : "left-6"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
