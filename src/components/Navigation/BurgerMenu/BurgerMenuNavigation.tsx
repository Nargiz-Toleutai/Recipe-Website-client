import * as React from "react";
import { motion } from "framer-motion";
import block from "bem-cn-lite";
import { useEffect, useMemo, useState } from "react";
import { NavigationLinkProps } from "../types";
import { MenuItem } from "./MenuItem";

const b = block("burger-menu-navigation");

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const BurgerMenuNavigation: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

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
    <motion.ul variants={variants} className={b()}>
      {filteredLinks.map((link, index) => (
        <MenuItem key={link.id} {...link} />
      ))}
    </motion.ul>
  );
};
