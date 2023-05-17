import React from "react";

import type { ITagsProps } from "./types";

const Tags = ({ data }: ITagsProps): JSX.Element => {
  return (
    <p className={"mb-0"}>
      {data.map(
        (el): JSX.Element => (
          <span className={"d-inline-block me-3"} key={el}>
            {el}
          </span>
        )
      )}
    </p>
  );
};

export { Tags };
