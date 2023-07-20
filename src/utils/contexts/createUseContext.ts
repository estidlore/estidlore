import type { Context } from "react";
import { useContext } from "react";

const createUseContext = <T>(
  Context: Context<T | null>,
  contextName = "Context"
): (() => T) => {
  return () => {
    const ctx = useContext(Context);
    if (ctx === null) {
      throw Error(`${contextName} provider not found`);
    }
    return ctx;
  };
};

export { createUseContext };
