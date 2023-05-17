import React from "react";

import type { ICardProps } from "./types";

const Card = ({ children, className = "", title }: ICardProps): JSX.Element => {
  const baseCls = "border border-light rounded p-3";

  return (
    <div className={`${baseCls} ${className}`.trimEnd()}>
      <p className={"fs-4 fw-bold mb-2"}>{title}</p>
      {children}
    </div>
  );
};

export { Card };
