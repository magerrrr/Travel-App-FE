import * as React from 'react';
import { SearchContext } from '../context/SearchContext';
import Intro from '../components/intro';
import CountryCardsContainer from '../components/country-cards-container';

const StartPage: React.FC = () => {
  const [searchText, setSearchText] = React.useState('');
  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      <Intro />
      <CountryCardsContainer />
    </SearchContext.Provider>
  );
};

export default StartPage;
