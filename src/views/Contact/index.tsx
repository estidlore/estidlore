import type { FC } from "react";
import React from "react";

import { email, github, linkedIn } from "assets/imgs";

import { ContactLink } from "./Link";

const Contact: FC = (): JSX.Element => {
  return (
    <section className={"py-5"} id={"contact"}>
      <p className={"fs-1 fw-bold mb-4 text-center"}>{"Contact"}</p>
      <div className={"justify-content-center d-flex"}>
        <ContactLink href={"mailto:estidlore@outlook.com"} src={email} />
        <ContactLink href={"https://github.com/estidlore"} src={github} />
        <ContactLink
          href={"https://www.linkedin.com/in/estidlore"}
          src={linkedIn}
        />
      </div>
    </section>
  );
};

export { Contact };
