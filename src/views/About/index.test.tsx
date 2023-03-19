import { render, screen } from "@testing-library/react";
import React from "react";

import { About } from ".";
import { t } from "./lang";

describe("About", () => {
  it("renders the about view", () => {
    expect.assertions(2);
    render(<About />);

    expect(screen.queryByText(t().title)).toBeInTheDocument();
    expect(screen.queryByText(t().profile)).toBeInTheDocument();
  });
});
