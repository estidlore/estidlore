import React from "react";

import { imgs } from "assets/imgs";
import { Card } from "components/Card";
import { Link } from "components/Link";
import { Section } from "components/Section";
import { Tags } from "components/Tags";

import { projects, t } from "./lang";

const Projects = (): JSX.Element => {
  return (
    <Section
      className={"gap-4 grid grid-cols-2"}
      id={"projects"}
      title={t().title}
    >
      {projects.map(
        (el): JSX.Element => (
          <Card
            className={"h-full"}
            key={el.name}
            title={
              <>
                {el.name}
                {el.link ? (
                  <Link className={"float-right"} to={el.link}>
                    <img
                      alt={"Visit GitHub repository"}
                      className={"brightness-0 invert"}
                      height={16}
                      src={imgs.github}
                      width={16}
                    />
                  </Link>
                ) : undefined}
              </>
            }
          >
            <p className={"mb-2"}>{el.description}</p>
            <hr className={"border-gray-600 my-4"} />
            <Tags data={el.skills} />
          </Card>
        ),
      )}
      <p className={"mb-0 mt-2"}>
        {t().more}
        <Link
          className={"mr-2"}
          to={"https://github.com/estidlore?tab=repositories"}
        >
          {t().repositories}
        </Link>
      </p>
    </Section>
  );
};

export { Projects };
