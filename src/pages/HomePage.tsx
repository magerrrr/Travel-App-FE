import * as React from 'react';
import { SearchContext } from '../context/SearchContext';
import Intro from '../components/Intro';
import CountryCardsContainer from '../components/CountryCardsContainer';

export const HomePage: React.FC = () => {
  const [searchText, setSearchText] = React.useState('');
  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      <Intro />
      <CountryCardsContainer />
    </SearchContext.Provider>
  );
};
