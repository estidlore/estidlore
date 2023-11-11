import { render, screen } from "@testing-library/react";
import React from "react";

import { Language } from "utils/contexts";

import { Contact } from ".";
import { entries } from "./lang";

describe("Contact", () => {
  const { ENG } = entries;

  it("renders the contact view", () => {
    expect.assertions(3);
    render(<Contact />, { wrapper: Language.Provider });

    [ENG.email, ENG.github, ENG.linkedin].forEach((title) => {
      expect(screen.queryByTitle(title)).toBeInTheDocument();
    });
  });
});
