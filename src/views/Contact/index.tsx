import React from "react";

import { imgs } from "assets/imgs";
import { Link } from "components/Link";
import { Section } from "components/Section";

import { ContactLink } from "./Link";
import { useTranslation } from "./lang";

const Contact = (): JSX.Element => {
  const t = useTranslation();

  return (
    <Section id={"contact"} title={t.title}>
      <div className={"justify-content-center d-flex"}>
        <ContactLink
          alt={"Send email"}
          src={imgs.email}
          to={"mailto:estidlore@outlook.com"}
        />
        <ContactLink
          alt={"Visit GitHub profile"}
          src={imgs.github}
          to={"https://github.com/estidlore"}
        />
        <ContactLink
          alt={"Visit LinkedIn profile"}
          src={imgs.linkedIn}
          to={"https://linkedin.com/in/estidlore"}
        />
      </div>
      <div className={"d-flex justify-content-center mt-3"}>
        <Link
          className={"btn btn-dark"}
          to={
            "https://drive.google.com/file/d/1p3UfpXaQ539En1JA6iO-w86oz1wf8C-z/view"
          }
        >
          {t.resume}
        </Link>
      </div>
    </Section>
  );
};

export { Contact };
