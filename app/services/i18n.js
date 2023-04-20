import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const recourses = {
  en: {
    translation: {
      hello: "hello",
    },
  },
  fa: {
    translation: {
      hello: "سلام",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    recourses,
    lng: "fa",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n