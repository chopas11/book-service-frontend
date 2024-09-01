import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';


i18n
    .use(HttpApi)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        supportedLngs: ['en', 'ru', 'rs'], // Langs
        fallbackLng: 'en', // Default lang
        detection: {
            order: ['path', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'querystring'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json', // Path to langs files
        },
        react: {
            useSuspense: true,
        },
    });

export default i18n;