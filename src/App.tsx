import type { FC } from "react";
import React from "react";

import { Contact } from "views/Contact";
import { Header } from "views/Header";

const App: FC = (): JSX.Element => (
  <div className={"bg-dark text-light px-3"}>
    <Header />
    <Contact />
  </div>
);

export { App };
