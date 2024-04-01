import Footer from "@/components/Footer";
import AppNav from "@/components/layout/app-nav";

const ServicePage2 = () => {
  return (
    <main className="min-h-screen bg-background dark:bg-background">
      <div className="custom-container">
        <AppNav />
        <section className="flex items-center justify-center py-20">
          <h1 className="text-body text-9xl font-semibold mb-8">
            Our <i className="font-thin text-primary">Services</i>
          </h1>
        </section>
        <Footer />
      </div>
    </main>
  );
};

export default ServicePage2;
