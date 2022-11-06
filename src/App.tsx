import type { FC } from "react";
import React from "react";

import { Contact } from "views/Contact";

const App: FC = (): JSX.Element => (
  <div className={"bg-dark text-light"}>
    <Contact />
  </div>
);

export { App };
