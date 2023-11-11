import { Language } from "utils/contexts";

const { entries, useTranslation } = Language.translation({
  ENG: {
    email: "Send email",
    github: "View Github profile",
    linkedin: "View Linkedin profile",
  },
});

export { entries, useTranslation };
