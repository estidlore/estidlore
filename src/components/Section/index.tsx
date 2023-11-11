import React from "react";

import "./styles.css";
import type { ISectionProps } from "./types";

const Section = ({
  children,
  className,
  id,
  title,
}: ISectionProps): JSX.Element => {
  return (
    <section className={"Section"} id={id}>
      <p className={"title"}>{title}</p>
      <div className={className}>{children}</div>
    </section>
  );
};

export { Section };
