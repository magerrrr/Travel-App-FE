import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { I18nextProvider } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import i18n from './i18n/config';
import Video from "./components/video";

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <h1>Hello, Our team will create best travel application ever!</h1>
        <Button variant="contained">material UI button</Button>
      </div>
      <Toolbar>
        <Container maxWidth='md'>
          <Video embedId="L5JORXmV_A0" />
        </Container>
      </Toolbar>
    </I18nextProvider>
  );
};

export default hot(App);
