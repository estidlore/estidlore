import React, { useState } from "react";

import "./styles.css";
import type { TabsProps } from "./types";

const Tabs = <T,>({
  data,
  getTabName,
  render: Tab,
}: TabsProps<T>): JSX.Element => {
  const [selection, setSelection] = useState(0);

  const tab = data[selection];

  return (
    <div className={"Tabs"}>
      <div className={"buttons"}>
        {data.map((tab, idx): JSX.Element => {
          const name = getTabName(tab);

          return (
            <button
              className={idx === selection ? "selected" : undefined}
              key={name}
              onClick={function fn(): void {
                setSelection(idx);
              }}
            >
              {name}
            </button>
          );
        })}
      </div>
      <div className={"grow"}>
        <Tab {...tab} key={getTabName(tab)} />
      </div>
    </div>
  );
};

export { Tabs };
