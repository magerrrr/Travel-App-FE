import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import "./i18n/config";
import Header from './components/header';
import Intro from './components/intro';

const App: React.FC = () => {
  return (
    <div className='page'>
      <Header />
      <Intro />
    </div>
  );
};

export default hot(App);
