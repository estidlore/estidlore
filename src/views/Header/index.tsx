import type { FC } from "react";
import React from "react";

import { pawn, queen } from "assets/imgs";

import { t } from "./lang";

const Header: FC = (): JSX.Element => {
  return (
    <section className={"position-relative py-5 text-center vh-100"}>
      <div
        className={"position-absolute start-50 top-50 translate-middle"}
      >
        <p className={"display-1 fw-bold mb-2"}>{t().greeting}</p>
        <p className={"display-4 fw-bold mb-2"}>{t().introduction}</p>
        <p className={"fs-3 mb-0"}>{t().subtitle}</p>
        <div className={"chess-piece mt-5"}>
          <img className={"pawn"} src={pawn} width={128} />
          <img
            className={"queen start-50 top-50 translate-middle"}
            src={queen}
            width={128}
          />
        </div>
      </div>
    </section>
  );
};

export { Header };
