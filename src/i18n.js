import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        IntroductionLeft: 'Explore',
        IntroductionRight: 'The World!',
        search: 'Search...',
        login: 'Log In',
        logout: 'Log Out',
      },
    },
    ru: {
      translations: {
        IntroductionLeft: 'Открой Мир',
        IntroductionRight: 'Путешествий!',
        search: 'Поиск...',
        login: 'Войти',
        logout: 'Выйти',
      },
    },

    es: {
      translations: {
        IntroductionLeft: 'Explorar',
        IntroductionRight: 'El Mundo!',
        search: 'Busca...',
        login: 'Iniciar Sesión',
        logout: 'Cerrar Sesión',
      },
    },
  },
  fallbackLng: 'en',
  debug: true,
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false,

  interpolation: {
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
});

export default i18n;
