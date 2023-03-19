import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import { Card } from ".";

describe("Card", () => {
  it("renders the card component", () => {
    expect.assertions(2);
    render(<Card title={"CardTitle"}>{"CardContent"}</Card>);

    expect(screen.queryByText("CardTitle")).toBeInTheDocument();
    expect(screen.queryByText("CardContent")).toBeInTheDocument();
  });
});
