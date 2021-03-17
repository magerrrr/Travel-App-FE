import * as React from 'react';
import { Suspense } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { SearchContext } from '../context/SearchContext';
import Intro from '../components/Intro';
import CountryCardsContainer from '../components/CountryCardsContainer';

export const HomePage: React.FC = () => {
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
