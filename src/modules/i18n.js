import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./locales/en";
import { sv } from "./locales/sv";

const resources = {
  en: en,
  sv: sv,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  react: {
    useSuspense: true,
  },
});

export default i18n;
