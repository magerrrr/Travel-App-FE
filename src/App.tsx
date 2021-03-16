import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import './i18n/config';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { HomePage } from './pages/HomePage';
import { CountryPage } from './pages/CountryPage';
import { NotFoundPage } from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/country/1">First Country</Link>
            </li>
            <li>
              <Link to="/country/2">Second Country</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/country/:id" component={CountryPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </I18nextProvider>
    </Router>
  );
};

export default hot(App);
