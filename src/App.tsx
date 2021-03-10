import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import i18n from "./i18n/config";
import { I18nextProvider } from "react-i18next";
import Header from './components/header';
import Intro from './components/intro';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <div className='page'>
        <Header />
        <Intro />
      </div>
    </I18nextProvider>
  );
};

export default hot(App);
