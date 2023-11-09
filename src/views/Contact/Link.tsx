import React from "react";

import { Link } from "components/Link";

import type { IContactLinkProps } from "./types";

const ContactLink = ({ alt, src, to }: IContactLinkProps): JSX.Element => {
  return (
    <Link className={"mx-2"} to={to}>
      <img
        alt={alt}
        className={"brightness-0 invert"}
        height={64}
        src={src}
        width={64}
      />
    </Link>
  );
};

export { ContactLink };
