import { ReactNode } from "react";
import NavigationBar from "./NavBar/NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <NavigationBar />
      {children}
    </div>
  );
};
export default Layout;
