import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json'; // англійська мова
import ua from './locales/ua.json'; // українська мова
import ru from './locales/ru.json'; // російська мова

const resources = {
    en: {
        translation: en
    },
    ua: {
        translation: ua
    },
    ru: {
        translation: ru
    }
};

i18n
    .use(initReactI18next) // використовується для інтеграції з React
    .init({
        resources,
        lng: 'en', // мова за замовчуванням
        fallbackLng: 'en', // мова, на яку буде здійснено fallback, якщо переклад не знайдено
        interpolation: {
            escapeValue: false // React вже самостійно екранує значення
        }
    });

export default i18n;