import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { Language } from "utils/contexts";

import { Header } from ".";
import { entries } from "./lang";

describe("Header", () => {
  const { ENG, SPA } = entries;

  beforeEach(() => {
    render(
      <Language.Provider>
        <Header />
      </Language.Provider>,
    );
  });

  it("renders the header view", () => {
    expect.assertions(4);

    expect(screen.queryByText(ENG.greeting)).toBeInTheDocument();
    expect(screen.queryByText(ENG.introduction)).toBeInTheDocument();
    expect(screen.queryByText(ENG.subtitle)).toBeInTheDocument();
    expect(screen.queryByAltText("Estid")).toBeInTheDocument();
  });

  it("toggle the language", () => {
    expect.assertions(2);

    const photo = screen.getByAltText("Estid");
    fireEvent.mouseEnter(photo);
    expect(screen.queryByText(SPA?.greeting as string)).toBeInTheDocument();
    fireEvent.mouseLeave(photo);
    expect(screen.queryByText(ENG.greeting)).toBeInTheDocument();
  });
});
