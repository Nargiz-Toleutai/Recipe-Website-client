import * as React from "react";
import { motion } from "framer-motion";
import { NavigationLinkProps } from "../types";
import NavigationLink from "../NavigationLink";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ id, title, to }: NavigationLinkProps) => {
  const style = { border: `2px solid #fdbd2f` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style} />
      <NavigationLink id={id} title={title} to={to} />
      <div className="text-placeholder" style={style} />
    </motion.li>
  );
};
