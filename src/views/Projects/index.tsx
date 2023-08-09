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
      className={"align-items-stretch row"}
      id={"projects"}
      title={t().title}
    >
      {projects.map(
        (el): JSX.Element => (
          <div className={"col-12 col-sm-6 mb-3"} key={el.name}>
            <Card
              className={"h-100"}
              key={el.name}
              title={
                <p className={"d-flex mb-0 justify-content-between"}>
                  {el.name}
                  {el.link ? (
                    <Link to={el.link}>
                      <img
                        className={"filter-light"}
                        src={imgs.github}
                        width={16}
                      />
                    </Link>
                  ) : undefined}
                </p>
              }
            >
              <p className={"mb-2"}>{el.description}</p>
              <hr />
              <Tags data={el.skills} />
            </Card>
          </div>
        )
      )}
      <p className={"mb-0 mt-2"}>
        {t().more}
        <Link
          className={"btn-dark ms-2"}
          to={"https://github.com/estidlore?tab=repositories"}
        >
          {t().repositories}
        </Link>
      </p>
    </Section>
  );
};

export { Projects };
