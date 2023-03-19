import { render, screen } from "@testing-library/react";
import React from "react";

import { Header } from ".";
import { t } from "./lang";

describe("Header", () => {
  it("renders the header view", () => {
    expect.assertions(3);
    render(<Header />);

    expect(screen.queryByText(t().greeting)).toBeInTheDocument();
    expect(screen.queryByText(t().introduction)).toBeInTheDocument();
    expect(screen.queryByText(t().subtitle)).toBeInTheDocument();
  });
});
