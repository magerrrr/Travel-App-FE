import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';
import i18n from './i18n/config';
import { I18nextProvider } from 'react-i18next';
import Widgets from './components/Widgets';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <h1>Hello, Our team will create best travel application ever!</h1>
        <Button variant="contained">material UI button</Button>
        <Widgets />
      </div>
    </I18nextProvider>
  );
};

export default hot(App);
