import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ar from "./locales/ar.json";

export const SUPPORTED_LANGUAGES = ["en", "ar"] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

const RTL_LANGUAGES: SupportedLanguage[] = ["ar"];

export function getDirection(lng: string): "rtl" | "ltr" {
  return RTL_LANGUAGES.includes(lng as SupportedLanguage) ? "rtl" : "ltr";
}

// Keep <html lang/dir> and the tab title in sync with the active language,
// so the browser, screen readers and our RTL styles all follow along.
function applyDocumentLanguage(lng: string) {
  const html = document.documentElement;
  html.setAttribute("lang", lng);
  html.setAttribute("dir", getDirection(lng));
  document.title = i18n.t("meta.title");
}

i18n.on("languageChanged", applyDocumentLanguage);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGUAGES as unknown as string[],
    nonExplicitSupportedLngs: true, // "ar-EG" -> "ar"
    load: "languageOnly",
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: "lang",
      lookupLocalStorage: "lang",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false, // React already escapes
    },
    returnNull: false,
  });

export default i18n;
