import "./styles.scss";

import React, { useCallback, useRef } from "react";

import { imgs } from "assets/imgs";
import { Stars } from "components/Stars";
import { useParallax } from "utils/hooks/useParallax";

import { useTranslation } from "./lang";

const center = "align-items-center d-flex flex-column";
const noOverflow = "overflow-hidden position-relative";

const Header = (): JSX.Element => {
  const { lang, t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const parallax = useParallax(ref);

  const handleSetSpanish = useCallback(() => {
    lang.setLanguage("SPA");
  }, []);
  const handleSetEnglish = useCallback(() => {
    lang.setLanguage("ENG");
  }, []);

  return (
    <div
      className={`py-5 vh-100 ${center} ${noOverflow}`}
      id={"header"}
      ref={ref}
    >
      {Array.from(Array(10).keys()).map((el) => {
        const distance = Math.sqrt(10 * el + 10);
        return (
          <div
            className={"h-100 position-absolute w-100"}
            key={el}
            style={{
              translate: parallax(distance).toString()
            }}
          >
            <Stars amount={10} />
          </div>
        );
      })}
      <p
        className={"display-1 fw-bold mb-2"}
        style={{
          translate: parallax(5).toString()
        }}
      >
        {t.greeting}
      </p>
      <p
        className={"display-4 fw-bold mb-2"}
        style={{
          translate: parallax(6).toString()
        }}
      >
        {t.introduction}
      </p>
      <p
        className={"fs-3 mb-0"}
        style={{
          translate: parallax(7).toString()
        }}
      >
        {t.subtitle}
      </p>
      <div
        className={"photo mt-5"}
        onMouseEnter={handleSetSpanish}
        onMouseLeave={handleSetEnglish}
        style={{
          translate: parallax(4).toString()
        }}
      >
        <img
          alt={"Estid"}
          className={"rounded-circle"}
          src={imgs.photo}
          width={192}
        />
      </div>
    </div>
  );
};

export { Header };
