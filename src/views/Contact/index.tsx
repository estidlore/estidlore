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
        <ContactLink href={"mailto:estidlore@outlook.com"} src={email} />
        <ContactLink href={"https://github.com/estidlore"} src={github} />
        <ContactLink
          href={"https://www.linkedin.com/in/estidlore"}
          src={linkedIn}
        />
      </div>
    </Section>
  );
};

export { Contact };
