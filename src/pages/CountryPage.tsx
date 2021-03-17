import { RouteComponentProps } from 'react-router-dom';
import * as React from 'react';
import CountryApiService from '../services/countryApiService';

type TParams = { id: string };

export const CountryPage = ({ match }: RouteComponentProps<TParams>) => {
  const { id } = match.params;
  const api = new CountryApiService();

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      const fetchedData = await api.getCountryData('belarus');
      setData(fetchedData);
    };

    getData();
  }, []);

  return (
    <h1>
      This is a page for country with ID:
      {id}
    </h1>
  );
};
