import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./styles.css";
import type { IconProps } from "./types";

const Icon = ({ className = "", ...restProps }: IconProps): JSX.Element => {
  return (
    <FontAwesomeIcon {...restProps} className={`Icon ${className}`.trim()} />
  );
};

export { Icon };
