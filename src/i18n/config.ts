import i18n from 'i18next';
import * as resources from './resources.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  fallbackLng: 'en',
  resources,
  ns: ['translations'],
  defaultNS: 'translations',
});

export default i18n;
