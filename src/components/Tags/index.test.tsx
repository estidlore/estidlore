import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import { Tags } from ".";

const data = ["TagA", "TagB", "TagC"];

describe("Tags", () => {
  it("renders the tags component", () => {
    expect.assertions(3); // data.length
    render(<Tags data={data} />);

    data.forEach((el): void => {
      expect(screen.queryByText(el)).toBeInTheDocument();
    });
  });
});
