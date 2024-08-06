import React, { ReactNode, useState, useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import MobileMenu from "./Navigation/Menu/Example";

interface LayoutProps {
  children: ReactNode;
  imgUrl?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, imgUrl }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="layout"
      style={{
        backgroundImage: imgUrl ? `url("${imgUrl}")` : undefined,
      }}
    >
      {isMobile ? <MobileMenu /> : <Navigation />}
      {children}
    </div>
  );
};

export default Layout;
