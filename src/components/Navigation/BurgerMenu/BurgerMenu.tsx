import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimentions";
import { MenuToggle } from "./MenuToggle";
import { BurgerMenuNavigation } from "./BurgerMenuNavigation";
import block from "bem-cn-lite";

const b = block("burger-menu");

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const BurgerMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={b({ closed: !isOpen })}
    >
      <motion.div className="background" variants={sidebar} />
      <BurgerMenuNavigation />
      <MenuToggle
        toggle={() => toggleOpen()}
        className={isOpen ? "" : "_closed"}
      />
    </motion.nav>
  );
};

export default BurgerMenu;
