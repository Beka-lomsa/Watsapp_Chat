import i18n from "i18next"

import enTranslation from "./en.json";
import geTranslation from "./ge.json";
import esTranslation from "./es.json";


i18n.init({
  debug: true,
  lng: "en",    // Default Language
  resources: {
    en: {translation: enTranslation},
    ge: {translation: geTranslation},
    es: {translation: esTranslation},
  }
})

export default i18n