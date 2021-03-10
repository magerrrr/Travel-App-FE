import i18n from 'i18next';
import * as resources from './resources.json';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources,
  debug: true,
  ns: ['translations'],
  defaultNS: 'translations',
});

export default i18n;
