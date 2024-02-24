import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { Card } from "components/Card";
import { Icon } from "components/Icon";
import { Link } from "components/Link";
import { Section } from "components/Section";
import { Tags } from "components/Tags";

import { projects, t } from "./lang";

const Projects = (): JSX.Element => {
  return (
    <Section id={"projects"} title={t().title}>
      <div className={"gap-4 grid sm:grid-cols-2 items-stretch"}>
        {projects.map(
          (el): JSX.Element => (
            <Card
              key={el.name}
              title={
                <>
                  {el.name}
                  <div className={"flex float-right"}>
                    {el.link ? (
                      <Link to={el.link}>
                        <Icon
                          icon={faArrowUpRightFromSquare}
                          title={"View project"}
                        />
                      </Link>
                    ) : null}
                    <Link to={el.repository}>
                      <Icon icon={faGithub} title={"View code"} />
                    </Link>
                  </div>
                </>
              }
            >
              <p className={"mb-2"}>{el.description}</p>
              <hr className={"border-gray-600 my-4"} />
              <Tags data={el.skills} />
            </Card>
          ),
        )}
      </div>
      <div className={"flex justify-center mt-4"}>
        <Link to={"https://github.com/estidlore?tab=repositories"}>
          {t().repositories}
        </Link>
      </div>
    </Section>
  );
};

export { Projects };
