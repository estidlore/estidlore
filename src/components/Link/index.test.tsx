import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import { Link } from ".";

describe("Link", () => {
  it("renders the work view", () => {
    expect.assertions(1);
    render(<Link to={"/"}>{"LinkContent"}</Link>);

    expect(screen.queryByText("LinkContent")).toBeInTheDocument();
  });
});
