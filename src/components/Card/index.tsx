import React from "react";

import "./styles.css";
import type { ICardProps } from "./types";

const Card = ({ children, className = "", title }: ICardProps): JSX.Element => {
  return (
    <div className={`Card ${className}`.trimEnd()}>
      <div className={"title"}>{title}</div>
      {children}
    </div>
  );
};

export { Card };
