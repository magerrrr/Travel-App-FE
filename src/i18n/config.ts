import i18n from 'i18next';

import * as translationEN from './en/translation.json';
import * as translationRU from './ru/translation.json';
import * as translationES from './es/translation.json';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  es: {
    translation: translationES
  }
};

i18n.use(LanguageDetector).init({
  fallbackLng: 'en',
  resources
});

export default i18n;
