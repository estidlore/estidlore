import { faChessPawn, faChessQueen } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { Icon } from "components/Icon";
import { Section } from "components/Section";

import { t } from "./lang";

const About = (): JSX.Element => {
  const cssChess = "[&>*]:duration-300 [&>*]:ease-linear [&>*]:transition";

  return (
    <Section id={"about"} title={t().title}>
      <p className={"text-2xl text-center"}>{t().profile}</p>
      <div className={`flex group justify-center mt-12 relative ${cssChess}`}>
        <Icon
          className={"group-hover:opacity-0"}
          icon={faChessPawn}
          size={"8x"}
          title={"Chess pawn"}
        />
        <Icon
          className={"absolute opacity-0 group-hover:opacity-100"}
          icon={faChessQueen}
          size={"8x"}
          title={"Chess queen"}
        />
      </div>
    </Section>
  );
};

export { About };
