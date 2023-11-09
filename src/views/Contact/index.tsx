import React from "react";

import { imgs } from "assets/imgs";

import { ContactLink } from "./Link";

const Contact = (): JSX.Element => {
  return (
    <div
      className={
        "backdrop-blur fixed flex flex-col left-0 top-1/2 -translate-y-1/2"
      }
    >
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
  );
};

export { Contact };
