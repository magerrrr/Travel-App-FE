import * as React from 'react';

interface ISearchContext {
  searchText: string
  setSearchText: (value: string) => void
}
const SearchContext = React.createContext<ISearchContext>({
  searchText: '',
  setSearchText: (value) => { }
});

export {
  SearchContext
}
