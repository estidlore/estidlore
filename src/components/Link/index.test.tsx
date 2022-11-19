import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import { Link } from ".";

it("renders the work view", () => {
  render(<Link to={"/"}>{"LinkContent"}</Link>);

  expect(screen.queryByText("LinkContent")).toBeInTheDocument();
});
