import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import App from './App';

const mountNode = document.getElementById('app');
ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  mountNode);
