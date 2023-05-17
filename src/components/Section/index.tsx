import React from "react";

import type { ISectionProps } from "./types";

const Section = ({
  children,
  className,
  id,
  title
}: ISectionProps): JSX.Element => {
  return (
    <section className={"py-5"} id={id}>
      <p className={"fs-1 fw-bold mb-4 text-center"}>{title}</p>
      <div className={className}>{children}</div>
    </section>
  );
};

export { Section };
