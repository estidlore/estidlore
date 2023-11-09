import React from "react";

import { imgs } from "assets/imgs";
import { Section } from "components/Section";

import { t } from "./lang";

const About = (): JSX.Element => {
  const cssChess = "[&>*]:duration-300 [&>*]:ease-linear [&>*]:transition";

  return (
    <Section id={"about"} title={t().title}>
      <p className={"text-2xl text-center"}>{t().profile}</p>
      <div className={`flex group justify-center mt-12 relative ${cssChess}`}>
        <img
          alt={"Chess pawn"}
          className={"group-hover:opacity-0"}
          height={128}
          src={imgs.pawn}
          width={128}
        />
        <img
          alt={"Chess queen"}
          className={"absolute opacity-0 group-hover:opacity-100"}
          height={128}
          src={imgs.queen}
          width={128}
        />
      </div>
    </Section>
  );
};

export { About };
