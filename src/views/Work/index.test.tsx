import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import { Work } from ".";
import { t } from "./lang";

it("renders the work view", () => {
  render(<Work />);

  expect(screen.queryByText(t().title)).toBeInTheDocument();
  t().work.map(({ id }): void => {
    expect(screen.queryByText(id)).toBeInTheDocument();
  });
});
