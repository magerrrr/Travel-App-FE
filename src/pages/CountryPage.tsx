import { RouteComponentProps } from 'react-router-dom';
import * as React from 'react';
import CountryApiService from '../services/countryApiService';
import { countries } from '../components/CountryCardsContainer/stubs';

type TParams = { id: string };

export const CountryPage = ({ match }: RouteComponentProps<TParams>) => {
  const { id } = match.params;
  const api = new CountryApiService();
  const currentCountry = countries.find((country) => country.id === +id);

  const [currentCountryData, setCurrentCountryData] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      // @ts-ignore
      const fetchedData = await api.getCountryData(currentCountry?.name);
      setCurrentCountryData(fetchedData);
    };

    getData();
  }, []);

  return (
    <h1>
      This is a page for country with ID:
      {id}
      <p>{currentCountryData ? JSON.stringify(currentCountryData, undefined, 2) : 'loading'}</p>
    </h1>
  );
};
