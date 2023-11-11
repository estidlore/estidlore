import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";

import { Card } from "components/Card";
import { Icon } from "components/Icon";
import { Link } from "components/Link";
import { Section } from "components/Section";
import { Tags } from "components/Tags";

import { projects, t } from "./lang";

const Projects = (): JSX.Element => {
  return (
    <Section
      className={"gap-4 grid grid-cols-2 place-items-center"}
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
                    <Icon icon={faGithub} title={"View code"} />
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
      <Link
        className={"col-span-2 mr-2"}
        to={"https://github.com/estidlore?tab=repositories"}
      >
        {t().repositories}
      </Link>
    </Section>
  );
};

export { Projects };
