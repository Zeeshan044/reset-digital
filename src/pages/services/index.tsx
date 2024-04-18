import CTASection from "@/components/pages/cta-section";
import ServiceSectionSlide from "@/components/pages/services/service-slide";
import DummyLoading from "@/components/ui/dummy-loading";
import SERVICES from "@/data/services";

const Services = () => {
  return (
    <div className="container-custom-xxl">
      <DummyLoading />
      {/* Hero Intro */}
      <section className="flex flex-col items-center justify-center py-20 p-section">
        <h1 className="text-7xl lg:text-9xl font-semibold text-center">
          Our <i className="font-thin text-primary">Services</i>
        </h1>
        <p className="max-w-5xl text-center mt-8 lg:mt-16 lg:text-xl font-light">
          At Reset Digital, our suite of services is crafted to cover every
          aspect of your digital transformation journey. From the initial design
          to the final click, we ensure your brand not only stands out but
          thrives in the digital landscape.
        </p>
      </section>

      {/* Services Section */}
      <section className="flex flex-col gap-y-32 lg:gap-y-40 my-20 p-section overflow-hidden">
        {SERVICES.map((section, index) => (
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

      {/* <GetInTouchABout /> */}
      <CTASection />
    </div>
  );
};

export default Services;
