import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import { Section } from ".";

it("renders the section component", () => {
  render(<Section title={"SectionTitle"}>{"SectionContent"}</Section>);

  expect(screen.queryByText("SectionTitle")).toBeInTheDocument();
  expect(screen.queryByText("SectionContent")).toBeInTheDocument();
});
