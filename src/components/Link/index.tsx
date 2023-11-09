import "./styles.css";

import React from "react";

import type { ILinkProps } from "./types";

const externalRegEx = /^https?:\/\/.*$/;

const Link = ({ children, className = "", to }: ILinkProps): JSX.Element => {
  return externalRegEx.test(to) ? (
    <a
      className={`Link ${className}`.trim()}
      href={to}
      rel={"noopener noreferrer"}
      target={"_blank"}
    >
      {children}
    </a>
  ) : (
    <a className={`Link ${className}`.trim()} href={to} target={"_self"}>
      {children}
    </a>
  );
};

export { Link };
