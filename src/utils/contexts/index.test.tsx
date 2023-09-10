import { render, screen } from "@testing-library/react";
import React, { createContext } from "react";
import { createUseContext } from "ruxi";

describe("utils/contexts", () => {
  describe("createUseContext", () => {
    const NumContext = createContext<number | null>(null);
    const useNum = createUseContext(NumContext);
    const NumDemo = (): JSX.Element => <p>{useNum()}</p>;

    it("Return context value", () => {
      expect.assertions(1);
      const num = 5;
      render(
        <NumContext.Provider value={num}>
          <NumDemo />
        </NumContext.Provider>
      );
      expect(screen.queryByText(num)).toBeInTheDocument();
    });

    it("Throw error", () => {
      expect.assertions(2);
      const consoleError = jest
        .spyOn(console, "error")
        .mockImplementation(() => jest.fn());

      expect(() => {
        render(<NumDemo />);
      }).toThrow("Context provider not found");
      expect(consoleError).toHaveBeenCalled();
      consoleError.mockRestore();
    });
  });
});
