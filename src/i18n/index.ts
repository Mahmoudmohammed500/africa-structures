import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "./locales/ar";
import en from "./locales/en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar,
      en,
    },

    lng: "ar",

    fallbackLng: "ar",

    interpolation: {
      escapeValue: false,
    },
  });

const updateDocumentLanguage = (language: string) => {
  const currentLanguage = language.startsWith("en")
    ? "en"
    : "ar";

  const direction =
    currentLanguage === "ar"
      ? "rtl"
      : "ltr";

  document.documentElement.lang =
    currentLanguage;

  document.documentElement.dir =
    direction;

  document.body.dir =
    direction;
};

updateDocumentLanguage(i18n.language);

i18n.on(
  "languageChanged",
  updateDocumentLanguage
);

export default i18n;