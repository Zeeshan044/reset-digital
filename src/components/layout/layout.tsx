import React, { ReactNode } from "react";
import Footer from "./app-footer";
import AppNav from "./app-nav";
import LoadingAnimation from "../ui/loading-animation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div>
          <div className="container-custom py-24">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Layout;
