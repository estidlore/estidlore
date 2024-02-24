import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { Icon } from "components/Icon";
import { Link } from "components/Link";

import { useTranslation } from "./lang";
import "./styles.css";

const Contact = (): JSX.Element => {
  const t = useTranslation();

  return (
    <div id={"contact"}>
      <Link to={"mailto:estidlore@outlook.com"}>
        <Icon size={"2x"} icon={faEnvelope} title={t.email} />
      </Link>
      <Link to={"https://github.com/estidlore"}>
        <Icon size={"2x"} icon={faGithub} title={t.github} />
      </Link>
      <Link to={"https://linkedin.com/in/estidlore"}>
        <Icon size={"2x"} icon={faLinkedin} title={t.linkedin} />
      </Link>
    </div>
  );
};

export { Contact };
