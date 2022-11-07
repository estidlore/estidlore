import type { FC } from "react";
import React from "react";

import { photo } from "assets/imgs";

import { t } from "./lang";

const Header: FC = (): JSX.Element => {
  return (
    <section
      className={"align-items-center d-flex flex-column py-5 vh-100 w-100"}
    >
      <p className={"display-1 fw-bold mb-2"}>{t().greeting}</p>
      <p className={"display-4 fw-bold mb-2"}>{t().introduction}</p>
      <p className={"fs-3 mb-0"}>{t().subtitle}</p>
      <div className={"photo mt-5"}>
        <img className={"rounded-circle"} src={photo} width={192} />
      </div>
    </section>
  );
};

export { Header };
