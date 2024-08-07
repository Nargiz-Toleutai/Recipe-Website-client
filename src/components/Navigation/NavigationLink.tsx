import block from "bem-cn-lite";
import * as React from "react";
import Link from "next/link";

import { NavigationLinkProps } from "./types";

const b = block("navigation-link");

const NavigationLink = ({ title, to }: NavigationLinkProps) => {
  return (
    <Link href={to} className={b()}>
      {title}
    </Link>
  );
};

export default NavigationLink;
