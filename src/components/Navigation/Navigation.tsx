import block from "bem-cn-lite";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import NavigationLink from "./NavigationLink";
import { NavigationLinkProps } from "./types";

const b = block("navigation");

const Navigation = () => {
  const [token, setToken] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    setToken(tokenFromStorage);
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

  return (
    <nav className={b()}>
      <div className={b("container")}>
        <h1>🥘HomeChefRecipes</h1>
        <ul className={b("nav-links")}>
          {links
            .filter(
              (link) =>
                link.tokenRequired === null ||
                (token ? link.tokenRequired : !link.tokenRequired)
            )
            .map((link) => (
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
