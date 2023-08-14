import React from "react";

import { imgs } from "assets/imgs";
import { Section } from "components/Section";

import { t } from "./lang";
import { ContactLink } from "./Link";

const Contact = (): JSX.Element => {
  return (
    <Section id={"contact"} title={t().title}>
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
    </Section>
  );
};

export { Contact };
