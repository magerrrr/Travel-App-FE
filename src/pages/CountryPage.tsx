import { RouteComponentProps, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as React from 'react';
import { Button, Box, Toolbar, Container, CircularProgress, Grid } from '@material-ui/core';
import CountryImageGallery from '../components/ImageGallery';
import Video from '../components/Video';
import Weather from '../components/Weather';
import CapitalTime from '../components/capital-time-widget';
import CountryApiService from '../services/countryApiService';
import { countries } from '../components/CountryCardsContainer/stubs';

import {
  Polaroid,
  CountryLogo,
  CountryContainer,
  CountryName,
  Capital,
  CapitalImage,
  CapitalContainer,
} from './CountryPageStyles';
import MapComponent from '../components/map';

type TParams = { id: string };
type CurrentCountryTypes = {
  id: number;
  name: string;
  capital: string;
  image: string;
  preview?: string;
  embedId: string;
};

type CurrentCountryDataTypes = {
  name: string;
  flag: string;
  alpha3Code: string;
  latlng: number[];
  capital: string;
  currencies: Object[];
  region: string;
};

export const CountryPage = ({ match }: RouteComponentProps<TParams>) => {
  const { id } = match.params;
  const { t, i18n } = useTranslation();
  const lang = i18n.languages[0].split('-')[0];
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
  ) : (
    <CircularProgress size={120} />
  );

  return currentCountryData && currentCountry ? (
    <>
      <Polaroid>
        <CountryLogo src={currentCountry?.preview} alt={currentCountry.name} />
        <CountryContainer>
          <CountryName>{t(currentCountry.name)}</CountryName>
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
          {t('back')}
        </Button>
      </Box>
      <Box mt={4} mb={4}>
        <Toolbar>
          <Container maxWidth="lg">
            <Grid container direction="row" justify="center">
              <Capital>
                <CapitalImage src={currentCountry?.image} alt={currentCountry.capital} />
                <CapitalContainer>
                  <CountryName>{t(currentCountry.capital)}</CountryName>
                </CapitalContainer>
              </Capital>
              <Box mt={4} mb={4} className="map-box">
                {mapComponent}
              </Box>
            </Grid>
          </Container>
        </Toolbar>
        <Toolbar>
          <Container maxWidth="md">
            <Box mt={4} mb={4}>
              <CountryImageGallery name={currentCountry.capital} lang={lang} />
            </Box>
          </Container>
        </Toolbar>
        <Toolbar>
          <Container maxWidth="md">
            <Box mt={4} mb={4}>
              <Video embedId={currentCountry.embedId} />
            </Box>
          </Container>
        </Toolbar>
        <Toolbar>
          <Container maxWidth="md">
            <Box mt={4} mb={4}>
              <Grid container direction="row" justify="space-between">
              <Weather startQuery={currentCountry.capital} t={t} lang={lang} />
              <CapitalTime />
              </Grid>
            </Box>

          </Container>
        </Toolbar>
      </Box>
    </>
  ) : (
    <div className="overlay">
      <CircularProgress size={120} />
    </div>
  );
};
