import React, { useState } from "react";

import { Section } from "components/Section";
import { Tags } from "components/Tags";

import { t } from "./lang";

const base = "item mb-0 px-3 py-2 text-center";

const Work = (): JSX.Element => {
  const [selection, setSelection] = useState(0);

  const work = t().work[selection];

  return (
    <Section
      className={"align-items-start d-flex"}
      id={"work"}
      title={t().title}
    >
      <div className={"border-2 border-end"}>
        {t().work.map(
          (el, idx): JSX.Element => (
            <p
              className={`${base} ${idx === selection ? "selected" : ""}`}
              key={el.id}
              onClick={function fn(): void {
                setSelection(idx);
              }}
            >
              {el.id}
            </p>
          ),
        )}
      </div>
      <div className={"ms-3 flex-fill"}>
        <p className={"fs-3 mb-1"}>{work.role}</p>
        <p className={"fs-5 mb-1"}>{work.company}</p>
        <p className={"mb-3"}>
          {`${work.from.year} ${work.from.month} - ${
            work.to === "Present" ? work.to : `${work.to.year} ${work.to.month}`
          }`}
        </p>
        <p className={"mb-1"}>{work.description}</p>
        <hr />
        <Tags data={work.skills} />
      </div>
    </Section>
  );
};

export { Work };
