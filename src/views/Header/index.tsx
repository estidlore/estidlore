import React, { useCallback, useRef } from "react";

import { imgs } from "assets/imgs";
import { useParallax } from "utils/hooks/useParallax";

import { useTranslation } from "./lang";

const Header = (): JSX.Element => {
  const { lang, t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const parallax = useParallax(ref);

  const handleSetSpanish = useCallback(() => {
    lang.setLanguage("SPA");
  }, []);
  const handleSetEnglish = useCallback(() => {
    lang.setLanguage("ENG");
  }, []);

  return (
    <section
      className={"align-items-center d-flex flex-column py-5 vh-100 w-100"}
      ref={ref}
    >
      <p
        className={"display-1 fw-bold mb-2"}
        style={{
          translate: parallax(2.5).toString()
        }}
      >
        {t.greeting}
      </p>
      <p
        className={"display-4 fw-bold mb-2"}
        style={{
          translate: parallax(3).toString()
        }}
      >
        {t.introduction}
      </p>
      <p
        className={"fs-3 mb-0"}
        style={{
          translate: parallax(4).toString()
        }}
      >
        {t.subtitle}
      </p>
      <div
        className={"photo mt-5"}
        onMouseEnter={handleSetSpanish}
        onMouseLeave={handleSetEnglish}
        style={{
          translate: parallax(2).toString()
        }}
      >
        <img
          alt={"Estid"}
          className={"rounded-circle"}
          src={imgs.photo}
          width={192}
        />
      </div>
    </section>
  );
};

export { Header };
