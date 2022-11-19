import type { FC } from "react";
import React from "react";

import type { ILinkProps } from "./types";

const externalRegEx = /^https?:\/\/.*$/;

const Link: FC<ILinkProps> = ({
  children,
  className = "",
  to,
}: ILinkProps): JSX.Element => {
  const cls = `btn ${className}`.trimEnd();

  return externalRegEx.test(to) ? (
    <a className={cls} href={to} rel={"noopener noreferrer"} target={"_blank"}>
      {children}
    </a>
  ) : (
    <a className={cls} href={to} target={"_self"}>
      {children}
    </a>
  );
};

export { Link };
