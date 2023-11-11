import React from "react";

import "./styles.css";
import type { ICardProps } from "./types";

const Card = ({ children, className = "", title }: ICardProps): JSX.Element => {
  return (
    <div className={`Card ${className}`.trimEnd()}>
      <p className={"title"}>{title}</p>
      {children}
    </div>
  );
};

export { Card };
