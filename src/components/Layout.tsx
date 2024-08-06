import React, { ReactNode, useState, useEffect } from "react";
import NavigationBar from "./NavBar/NavBar";
import MobileMenu from "./NavBar/Menu/Example";

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

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="layout"
      style={{
        backgroundImage: imgUrl ? `url("${imgUrl}")` : undefined,
      }}
    >
      {isMobile ? <MobileMenu /> : <NavigationBar />}
      {children}
    </div>
  );
};

export default Layout;
