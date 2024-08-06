import block from "bem-cn-lite";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import NavigationLink from "./NavigationLink";
import { NavigationLinkProps } from "./types";

const b = block("navigation");

const Navigation: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const links: NavigationLinkProps[] = useMemo(
    () => [
      { id: "home", title: "Home", to: "/", tokenRequired: null },
      {
        id: "dashboard",
        title: "Dashboard",
        to: "/dashboard",
        tokenRequired: true,
      },
      { id: "login", title: "Login", to: "/login", tokenRequired: false },
      { id: "logout", title: "Log out", to: "/logout", tokenRequired: true },
    ],
    []
  );

  const filteredLinks = links.filter(
    (link) =>
      link.tokenRequired === null ||
      (token ? link.tokenRequired : !link.tokenRequired)
  );

  return (
    <nav className={b()}>
      <div className={b("container")}>
        <h1>🥘HomeChefRecipes</h1>
        <ul className={b("nav-links")}>
          {filteredLinks.map((link) => (
            <li key={link.id} className="navigation-item">
              <NavigationLink
                selected={link.to === router.pathname}
                title={link.title}
                to={link.to}
                id={link.id}
                tokenRequired={link.tokenRequired}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
