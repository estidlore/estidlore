import { Language } from "utils/contexts";

const { entries, useTranslation } = Language.translation({
  ENG: {
    greeting: "Hello",
    introduction: "I'm Estid",
    subtitle: "A developer better than yesterday"
  },
  SPA: {
    greeting: "Hola",
    introduction: "Soy Estid"
  }
});

export { entries, useTranslation };
