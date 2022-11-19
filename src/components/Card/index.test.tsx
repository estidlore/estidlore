import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import { Card } from ".";

it("renders the card component", () => {
  render(<Card title={"CardTitle"}>{"CardContent"}</Card>);

  expect(screen.queryByText("CardTitle")).toBeInTheDocument();
  expect(screen.queryByText("CardContent")).toBeInTheDocument();
});
