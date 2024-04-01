import ServiceSectionSlide from "@/components/pages/services/service-slide";

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

const Services = () => {
  return (
    <>
      {/* Hero Intro */}
      <section className="flex flex-col items-center justify-center py-20 container-custom-sm">
        <h1 className="text-7xl lg:text-9xl font-semibold text-center">
          Our <i className="font-thin text-primary">Services</i>
        </h1>
        <p className=" text-center mt-8 lg:mt-16 lg:text-xl font-light">
          Embark on a creative odyssey with Reset Digital. We create websites
          that aren’t just beautiful but also embody the essence of your brand.
          Powered by Webflow; elevated by our generative and 3D solutions: we
          will make your vision an awe-inspiring reality.
        </p>
      </section>

      {/* Services Section */}
      <section className="flex flex-col gap-y-32 lg:gap-y-40 my-20 container-custom">
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
    </>
  );
};

export default Services;
