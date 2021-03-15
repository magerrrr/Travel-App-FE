import * as React from 'react';
import { Suspense } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { SearchContext } from '../context/SearchContext';
import Intro from '../components/intro';
import CountryCardsContainer from '../components/country-cards-container';

const StartPage: React.FC = () => {
  const [searchText, setSearchText] = React.useState('');
  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      <Suspense fallback={<div className='overlay'><CircularProgress size={120} /></div>}>
        <Intro />
        <CountryCardsContainer />
      </Suspense>
    </SearchContext.Provider>
  );
};

export default StartPage;
