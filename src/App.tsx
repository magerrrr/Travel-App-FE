import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import Header from './components/header';
import Intro from './components/intro';
import Footer from './components/footer';
import CountryCard from './components/country-card/CountryCard';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <div className='page'>
        <Header />
        <Intro />
        <Toolbar>
          <Container maxWidth='lg' className='cards'>
            <Grid container justify="center" spacing={5}>
              <Grid item>
                <CountryCard />
              </Grid>
              <Grid item>
                <CountryCard />
              </Grid>
              <Grid item>
                <CountryCard />
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
        <Footer />
      </div>
    </I18nextProvider>
  );
};

export default hot(App);
