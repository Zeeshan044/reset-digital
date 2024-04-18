import Footer from "@/components/layout/app-footer";
import AppNav from "@/components/layout/app-nav";
import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ScrollerMotion } from "scroller-motion";

export default function App({ Component, pageProps }: AppProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1000);
    setIsLoading(false);
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 1000);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth < 1000);
      });
    };
  }, []);

  if (isLoading) {
    return <div className="bg-background fixed inset-0"></div>;
  }
  return (
    <ScrollerMotion disabled={isMobile}>
      <main className="min-h-screen bg-background">
        <div>
          <AppNav />
          <Component {...pageProps} />
          <Footer />
        </div>
      </main>
    </ScrollerMotion>
  );
}
