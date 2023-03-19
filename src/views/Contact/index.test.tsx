import { render, screen } from "@testing-library/react";
import React from "react";

import { Contact } from ".";
import { t } from "./lang";

describe("Contact", () => {
  it("renders the contact view", () => {
    expect.assertions(1);
    render(<Contact />);

    expect(screen.queryByText(t().title)).toBeInTheDocument();
  });
});
