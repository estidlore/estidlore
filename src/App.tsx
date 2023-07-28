import React from "react";

import { Language } from "utils/contexts";
import { About } from "views/About";
import { Contact } from "views/Contact";
import { Header } from "views/Header";
import { Projects } from "views/Projects";
import { Work } from "views/Work";

const App = (): JSX.Element => (
  <div className={"bg-dark text-light px-2"}>
    <Language.Provider>
      <Header />
      <About />
      <Work />
      <Projects />
      <Contact />
    </Language.Provider>
  </div>
);

export { App };
