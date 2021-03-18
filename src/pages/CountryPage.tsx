import { RouteComponentProps, useHistory } from 'react-router-dom';
import * as React from 'react';
import { Button, Box, Toolbar, Container, CircularProgress } from '@material-ui/core';
import CountryImageGallery from "../components/ImageGallery";
import CountryApiService from '../services/countryApiService';
import { countries } from '../components/CountryCardsContainer/stubs';

import { Polaroid, CountryLogo, Container as CountryContainer, CountryName } from './CountryPageStyles';
import MapComponent from '../components/map';

type TParams = { id: string };
type CurrentCountryTypes = {
  id: number;
  name: string;
  capital: string;
  image: string;
  preview?: string;
};

type CurrentCountryDataTypes = {
  name: string,
  flag: string,
  alpha3Code: string,
  latlng: number[],
  capital: string,
  currencies: Object[],
  region: string,
}

export const CountryPage = ({ match }: RouteComponentProps<TParams>) => {
  const { id } = match.params;
  const history = useHistory();
  const api = new CountryApiService();
  const currentCountry: CurrentCountryTypes | undefined = countries.find(
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

  const mapComponent = currentCountryData ? (
    <MapComponent
      capitalPosition={{
        lat: currentCountryData.latlng[0],
        lng: currentCountryData.latlng[1],
      }}
      countryCode={currentCountryData.alpha3Code}
    />
  ) : <CircularProgress size={120} />;

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
      <Box textAlign="center">
        {mapComponent}
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
    <CircularProgress size={120} />
  );
};
