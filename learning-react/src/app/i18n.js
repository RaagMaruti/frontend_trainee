import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// for big websites store in separate JSON
await i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: {
      translation: {
        hello: "{{name}} - Hello, how are you?",
        nested: {
          key: "actual nested key",
        },
        error: {
          unspecific: "Something went wrong.",
          404: "The page was not found.",
        },
        cash: "{{value}} USD",
      },
    },
    gu: {
      translation: {
        namste: "{{name}} - નમસ્તે, કેમ છો?",
      },
    },
  },
});

export default i18n;
