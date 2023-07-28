import React, { useCallback } from "react";

import { photo } from "assets/imgs";

import { useTranslation } from "./lang";

const Header = (): JSX.Element => {
  const { lang, t } = useTranslation();

  const handleSetSpanish = useCallback(() => {
    lang.setLanguage("SPA");
  }, []);
  const handleSetEnglish = useCallback(() => {
    lang.setLanguage("ENG");
  }, []);

  return (
    <section
      className={"align-items-center d-flex flex-column py-5 vh-100 w-100"}
    >
      <p className={"display-1 fw-bold mb-2"}>{t.greeting}</p>
      <p className={"display-4 fw-bold mb-2"}>{t.introduction}</p>
      <p className={"fs-3 mb-0"}>{t.subtitle}</p>
      <div
        className={"photo mt-5"}
        onMouseEnter={handleSetSpanish}
        onMouseLeave={handleSetEnglish}
      >
        <img
          alt={"Estid"}
          className={"rounded-circle"}
          src={photo}
          width={192}
        />
      </div>
    </section>
  );
};

export { Header };
