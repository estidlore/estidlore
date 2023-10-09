import { Language } from "utils/contexts";

const { entries, useTranslation } = Language.translation({
  ENG: {
    resume: "View my resume",
    title: "Contact",
  },
});

export { entries, useTranslation };
