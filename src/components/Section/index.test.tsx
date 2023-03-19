import { render, screen } from "@testing-library/react";
import React from "react";

import { Section } from ".";

describe("Section", () => {
  it("renders the section component", () => {
    expect.assertions(2);
    render(<Section title={"SectionTitle"}>{"SectionContent"}</Section>);

    expect(screen.queryByText("SectionTitle")).toBeInTheDocument();
    expect(screen.queryByText("SectionContent")).toBeInTheDocument();
  });
});
