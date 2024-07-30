import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import your resources
import en from "./app/locales/en.json";
import fr from "./app/locales/fr.json";

const resources = {
  en: {
    translation: en, // Use 'translation' as the namespace for your strings
  },
  fr: {
    translation: fr,
  },
};

// Get selected language from local storage or default to 'en'
const selectedLng = window.localStorage.getItem("i18nextLng") || "en";

i18n
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .use(LanguageDetector) // Detect user's language
  .init({
    resources,
    lng: selectedLng, // Set the selected language
    fallbackLng: "en", // Fallback language in case of missing translations
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });

export default i18n;
