import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './i18n/config';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { HomePage } from './pages/HomePage';
import { CountryPage } from './pages/CountryPage';
import { NotFoundPage } from './pages/NotFoundPage';
import Header from './components/header';
import Footer from './components/footer';

import './App.scss';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

const App: React.FC = () => {
  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <MuiThemeProvider theme={theme}>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/country/:id' component={CountryPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </MuiThemeProvider>
      </I18nextProvider>
    </Router>
  );
};

export default hot(App);
