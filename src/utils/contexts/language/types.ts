import type { ReactNode } from "react";

import type { DeepPartial, DeepRecord } from "utils/types";

interface LangInfo<T extends string> {
  code: T;
  name: string;
}

interface LangConfig<T extends string, D extends T> {
  default: D;
  languages: Record<T, Omit<LangInfo<T>, "code">>;
}

interface LangContext<T extends string> {
  language: LangInfo<T>;
  languages: Record<T, Omit<LangInfo<T>, "code">>;
  setLanguage: (language: T) => void;
}

type LangEntries<
  T extends string,
  E extends DeepRecord,
  D extends T
> = DeepPartial<Record<T, E>> & Record<D, E>;

interface LangEntriesResult<
  T extends string,
  E extends DeepRecord,
  D extends T
> {
  entries: LangEntries<T, E, D>;
  useTranslation: () => LangTranslation<T, E>;
}

type LangProvider = (props: LangProviderProps) => JSX.Element;

interface LangProviderProps {
  children: ReactNode;
}

interface LangTranslation<T extends string, E extends DeepRecord> {
  lang: LangContext<T>;
  t: E;
}

export type {
  LangContext,
  LangConfig,
  LangEntries,
  LangProvider,
  LangProviderProps,
  LangEntriesResult,
  LangTranslation
};
