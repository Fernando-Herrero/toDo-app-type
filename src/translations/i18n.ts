import { local } from "@/helpers/storage";

import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en.json";
import translationES from "./locales/es.json";

const savedLang = local.get<string>("lang") || "es";

i18n
    // .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ["es", "en"],
        lng: savedLang,
        resources: {
            es: { translation: translationES },
            en: { translation: translationEN },
        },
        fallbackLng: "es",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
