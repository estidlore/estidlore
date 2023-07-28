import { createLanguageContext } from "./language";

const Language = createLanguageContext({
  default: "ENG",
  languages: {
    ENG: {
      name: "English"
    },
    SPA: {
      name: "Español"
    }
  }
});

export { Language };
