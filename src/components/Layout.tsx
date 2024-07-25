import { ReactNode } from "react";
import NavigationBar from "./NavBar/NavBar";

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout = ({ children }: LayoutProps) => {
//   return (
//     <div className="layout">
//       <NavigationBar />
//       {children}
//     </div>
//   );
// };
// export default Layout;

interface LayoutProps {
  children: ReactNode;
  imgUrl?: string;
}

const Layout = ({ children, imgUrl }: LayoutProps) => {
  return (
    <div
      className="layout"
      style={{
        backgroundImage: imgUrl ? `url("${imgUrl}")` : undefined,
      }}
    >
      <NavigationBar />
      {children}
    </div>
  );
};

export default Layout;
