import Footer from "@/components/Footer";
import AppNav from "@/components/layout/app-nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ScrollerMotion } from "scroller-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ScrollerMotion>
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
