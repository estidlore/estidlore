import type { FC } from "react";
import React from "react";

import type { IContactLinkProps } from "./types";

const ContactLink: FC<IContactLinkProps> = ({
  href,
  src,
}): JSX.Element => {
  return (
    <a className={"btn mx-2"} href={href}>
      <img className={"filter-light"} src={src} width={64} />
    </a>
  );
};

export { ContactLink };
