import type { FC } from "react";
import React from "react";

import { Link } from "components/Link";

import type { IContactLinkProps } from "./types";

const ContactLink: FC<IContactLinkProps> = ({
  src,
  to,
}): JSX.Element => {
  return (
    <Link className={"mx-2"} to={to} >
      <img className={"filter-light"} src={src} width={64} />
    </Link>
  );
};

export { ContactLink };
