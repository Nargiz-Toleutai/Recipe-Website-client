import block from "bem-cn-lite";
import * as React from "react";
import Link from "next/link";

import { NavigationLinkProps } from "./types";

const b = block("navigation-link");

const NavigationLink: React.FC<NavigationLinkProps> = ({
  title,
  to,
  selected,
}) => {
  return (
    <Link href={to} className={b({ selected })}>
      {title}
    </Link>
  );
};

export default NavigationLink;
