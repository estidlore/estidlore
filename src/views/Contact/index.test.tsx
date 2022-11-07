import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import { Contact } from ".";
import { t } from "./lang";

it("renders the contact view", () => {
  render(<Contact />);

  expect(screen.queryByText(t().title)).toBeInTheDocument();
});
