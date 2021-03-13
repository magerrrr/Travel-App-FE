import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import Header from './components/header';
import Footer from './components/footer';
import StartPage from './pages/StartPage';

const App: React.FC = () => {
  const [searchText, setSearchText] = React.useState('');
  return (
    <I18nextProvider i18n={i18n}>
      <div className='page'>
        <Header />
        <StartPage />
        <Footer />
      </div>
    </I18nextProvider>
  );
};

export default hot(App);
