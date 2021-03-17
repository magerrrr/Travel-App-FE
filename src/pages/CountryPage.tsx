import { RouteComponentProps, useHistory } from 'react-router-dom';
import * as React from 'react';
import { Button, Box } from '@material-ui/core';
import CountryApiService from '../services/countryApiService';
import { countries } from '../components/CountryCardsContainer/stubs';

import { Polaroid, CountryLogo, Container, CountryName } from './CountryPageStyles';

type TParams = { id: string };
type CurrentCountryDataTypes = {
  id: number;
  name: string;
  capital: string;
  image: string;
  preview?: string;
};

export const CountryPage = ({ match }: RouteComponentProps<TParams>) => {
  const { id } = match.params;
  const history = useHistory();
  const api = new CountryApiService();
  const currentCountry: CurrentCountryDataTypes | undefined = countries.find(
    (country) => country.id === +id,
  );

  const [
    currentCountryData,
    setCurrentCountryData,
  ] = React.useState<CurrentCountryDataTypes | null>(null);

  React.useEffect(() => {
    const getData = async () => {
      // @ts-ignore
      const fetchedData = await api.getCountryData(currentCountry?.name);
      setCurrentCountryData(fetchedData);
    };

    getData();
  }, []);

  return currentCountryData && currentCountry ? (
    <>
      <Polaroid>
        <CountryLogo src={currentCountry?.preview} alt={currentCountry.name} />
        <Container>
          <CountryName>{currentCountry.name}</CountryName>
        </Container>
      </Polaroid>
      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            history.goBack();
          }}
        >
          Go back
        </Button>
      </Box>
    </>
  ) : (
    <h1>loading...</h1>
  );
};
