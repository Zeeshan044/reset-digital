import React, { useEffect } from "react";
import AppNav from "@/components/layout/app-nav";
import Footer from "@/components/layout/app-footer";
import GetInTouchABout from "@/components/GetInTouchABout";
import Packages from "@/components/Packages";
import { ScrollerMotion } from "scroller-motion";
import LoadingAnimation from "@/components/ui/loading-animation";

const About = () => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }
  return (
    <main className="min-h-screen bg-white dark:bg-gradient-dark">
      <div className="container-custom">
        <AppNav />
        <Packages />
        {/* <GetInTouchABout /> */}
        <Footer />
      </div>
    </main>
  );
};

const PackagesPage = () => (
  <ScrollerMotion>
    <About />
  </ScrollerMotion>
);

export default PackagesPage;
