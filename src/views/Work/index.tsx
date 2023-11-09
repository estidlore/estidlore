import React from "react";

import { Section } from "components/Section";
import { Tabs } from "components/Tabs";
import { Tags } from "components/Tags";

import { t } from "./lang";
import type { IWork } from "./types";

const Work = (): JSX.Element => {
  return (
    <Section id={"work"} title={t().title}>
      <Tabs
        data={t().work}
        getTabName={(tab): string => tab.id}
        render={(work: IWork): JSX.Element => {
          return (
            <>
              <p className={"text-3xl mb-1"}>{work.role}</p>
              <p className={"text-xl mb-1"}>{work.company}</p>
              <p className={"mb-3"}>
                {`${work.from.year} ${work.from.month} - ${
                  work.to === "Present"
                    ? work.to
                    : `${work.to.year} ${work.to.month}`
                }`}
              </p>
              <p className={"mb-1 whitespace-pre-line"}>{work.description}</p>
              <hr className={"border-gray-600 my-4"} />
              <Tags data={work.skills} />
            </>
          );
        }}
      />
    </Section>
  );
};

export { Work };
