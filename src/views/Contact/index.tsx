import type { FC } from "react";
import React from "react";

import { email, github, linkedIn } from "assets/imgs";
import { Section } from "components/Section";

import { t } from "./lang";
import { ContactLink } from "./Link";

const Contact: FC = (): JSX.Element => {
  return (
    <Section id={"contact"} title={t().title}>
      <div className={"justify-content-center d-flex"}>
        <ContactLink src={email} to={"mailto:estidlore@outlook.com"} />
        <ContactLink src={github} to={"https://github.com/estidlore"} />
        <ContactLink src={linkedIn} to={"https://linkedin.com/in/estidlore"} />
      </div>
    </Section>
  );
};

export { Contact };
