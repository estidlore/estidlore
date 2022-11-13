import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import { About } from ".";
import { t } from "./lang";

it("renders the about view", () => {
  render(<About />);

  expect(screen.queryByText(t().title)).toBeInTheDocument();
  expect(screen.queryByText(t().profile)).toBeInTheDocument();
});
