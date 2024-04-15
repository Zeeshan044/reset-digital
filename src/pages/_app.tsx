import Footer from "@/components/layout/app-footer";
import AppNav from "@/components/layout/app-nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
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

  if (isLoading) return null;
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
