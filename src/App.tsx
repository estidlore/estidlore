import type { FC } from "react";
import React from "react";

import { About } from "views/About";
import { Contact } from "views/Contact";
import { Header } from "views/Header";
import { Work } from "views/Work";

const App: FC = (): JSX.Element => (
  <div className={"bg-dark text-light px-3"}>
    <Header />
    <About />
    <Work />
    <Contact />
  </div>
);

export { App };
