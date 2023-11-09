import "./styles.css";

import React, { useCallback, useRef } from "react";

import { imgs } from "assets/imgs";
import { Stars } from "components/Stars";
import { Language } from "utils/contexts";
import { useParallax } from "utils/hooks/useParallax";

import { useTranslation } from "./lang";

const Header = (): JSX.Element => {
  const lang = Language.useLanguage();
  const t = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const parallax = useParallax(ref);

  const handleSetSpanish = useCallback(() => {
    lang.setLanguage("SPA");
  }, []);
  const handleSetEnglish = useCallback(() => {
    lang.setLanguage("ENG");
  }, []);

  return (
    <div id={"header"} ref={ref}>
      {Array.from(Array(10).keys()).map((el) => {
        const distance = Math.sqrt(10 * el + 10);
        return (
          <div
            className={"absolute h-full w-full"}
            key={el}
            style={{
              translate: parallax(distance).toString(),
            }}
          >
            <Stars amount={10} />
          </div>
        );
      })}
      <p
        className={"text-7xl font-bold mb-2"}
        style={{
          translate: parallax(5).toString(),
        }}
      >
        {t.greeting}
      </p>
      <p
        className={"text-5xl font-bold mb-2"}
        style={{
          translate: parallax(6).toString(),
        }}
      >
        {t.introduction}
      </p>
      <p
        className={"text-3xl mb-0"}
        style={{
          translate: parallax(7).toString(),
        }}
      >
        {t.subtitle}
      </p>
      <div
        className={"border-4 p-2 rounded-full mt-12"}
        onMouseEnter={handleSetSpanish}
        onMouseLeave={handleSetEnglish}
        style={{
          translate: parallax(4).toString(),
        }}
      >
        <img
          alt={"Estid"}
          className={"rounded-full"}
          height={192}
          src={imgs.photo}
          width={192}
        />
      </div>
    </div>
  );
};

export { Header };
