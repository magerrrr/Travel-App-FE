import { RouteComponentProps, useHistory } from 'react-router-dom';
import * as React from 'react';
import { Button, Box, Toolbar, Container } from '@material-ui/core';
import CountryImageGallery from "../components/ImageGallery";
import CountryApiService from '../services/countryApiService';
import { countries } from '../components/CountryCardsContainer/stubs';

import { Polaroid, CountryLogo, Container as CountryContainer, CountryName } from './CountryPageStyles';

type TParams = { id: string };
type CurrentCountryDataTypes = {
  id: number;
  name: string;
  capital: string;
  image: string;
  preview?: string;
  latlng?: number[];
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
        <CountryContainer>
          <CountryName>{currentCountry.name}</CountryName>
        </CountryContainer>
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
      <Box mt={4} mb={4}>
        <Toolbar>
          <Container maxWidth='md'>
            <CountryImageGallery latlng={currentCountryData.latlng} />
          </Container>
        </Toolbar>
      </Box>
    </>
  ) : (
    <h1>loading...</h1>
  );
};
