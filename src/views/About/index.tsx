import React from "react";

import { imgs } from "assets/imgs";
import { Section } from "components/Section";

import { t } from "./lang";

const About = (): JSX.Element => {
  return (
    <Section id={"about"} title={t().title}>
      <p className={"fs-4 text-center"}>{t().profile}</p>
      <div className={"chess-piece d-flex justify-content-center mt-5"}>
        <img
          alt={"Chess pawn"}
          className={"pawn"}
          height={128}
          src={imgs.pawn}
          width={128}
        />
        <img
          alt={"Chess queen"}
          className={"queen position-absolute"}
          height={128}
          src={imgs.queen}
          width={128}
        />
      </div>
    </Section>
  );
};

export { About };
