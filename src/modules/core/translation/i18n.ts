import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from './en/common.json';
import ua from './ua/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    defaultNS: 'common',
    debug: true,
    resources: {
      en: {
        common: en
      },
      ua: {
        common: ua
      },
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
