import type { Context } from "react";
import React, { createContext, useMemo, useState } from "react";

import { createUseContext } from "utils/contexts/createUseContext";
import type { DeepRecord } from "utils/types";

import type {
  LangConfig,
  LangContext,
  LangEntries,
  LangEntriesResult,
  LangProvider,
  LangProviderProps,
  LangTranslation
} from "./types";

const createLanguageContext = <T extends string, D extends T>(
  config: LangConfig<T, D>
): {
  Provider: LangProvider;
  translation: <E extends DeepRecord>(
    entries: LangEntries<T, E, D>
  ) => LangEntriesResult<T, E, D>;
  useLanguage: () => LangContext<T>;
} => {
  const Context = createContext<LangContext<T> | null>(null);
  const Provider = createLanguageProvider(Context, config);
  const useLanguage = createUseContext(Context);

  const translation = <E extends DeepRecord>(
    entries: LangEntries<T, E, D>
  ): LangEntriesResult<T, E, D> => {
    const useTranslation = (): LangTranslation<T, E> => {
      const lang = useLanguage();
      const t = useMemo(
        () =>
          Object.assign(
            {},
            entries[config.default],
            entries[lang.language.code]
          ),
        [lang.language.code]
      );
      return { lang, t };
    };

    return { entries, useTranslation };
  };

  return {
    Provider,
    translation,
    useLanguage
  };
};

const createLanguageProvider = <T extends string, D extends T>(
  Context: Context<LangContext<T> | null>,
  config: LangConfig<T, D>
): LangProvider => {
  const LanguageProvider = ({ children }: LangProviderProps): JSX.Element => {
    const [language, setLanguage] = useState<T>(config.default);

    return (
      <Context.Provider
        value={{
          language: Object.assign(
            { code: language },
            config.languages[language]
          ),
          languages: config.languages,
          setLanguage
        }}
      >
        {children}
      </Context.Provider>
    );
  };

  return LanguageProvider;
};

export { createLanguageContext };
