import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import Header from './components/header';
import Intro from './components/intro';
import Footer from './components/footer';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <div className='page'>
        <Header />
        <Intro />
        <Footer />
      </div>
    </I18nextProvider>
  );
};

export default hot(App);
