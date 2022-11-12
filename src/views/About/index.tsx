import type { FC } from "react";
import React from "react";

import { pawn, queen } from "assets/imgs";

import { t } from "./lang";

const About: FC = (): JSX.Element => {
  return (
    <section className={"py-5"}>
      <p className={"fs-1 fw-bold mb-4 text-center"}>{t().title}</p>
      <p className={"fs-4 p text-center"}>{t().profile}</p>
      <div className={"chess-piece d-flex justify-content-center mt-5"}>
        <img className={"pawn"} src={pawn} width={128} />
        <img className={"queen position-absolute"} src={queen} width={128} />
      </div>
    </section>
  );
};

export { About };
