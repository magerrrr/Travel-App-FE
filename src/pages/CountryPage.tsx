import { RouteComponentProps, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as React from 'react';
import {
  Button, Box, Toolbar, Container, CircularProgress, Grid,
} from '@material-ui/core';
import CountryImageGallery from '../components/ImageGallery';
import Video from '../components/video';
import Weather from '../components/Weather';
import Exchange from '../components/Exchange';
import CapitalTime from '../components/capital-time-widget';
import CountryApiService from '../services/countryApiService';
import { countries } from '../components/CountryCardsContainer/stubs';
import { wikiGet } from "../utils";
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import {
  Polaroid,
  CountryLogo,
  CountryContainer,
  CountryName,
  Capital,
  CapitalImage,
  CapitalContainer,
  WidgetsGrid,
  Description,
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
  const [descr, setDescr] = React.useState('');
  const [fullDescr, setFullDescr] = React.useState(false);
  const [shortDescr, setShortDescr] = React.useState(false);
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

  const add3Dots = (text: string, limit: number) => {
    var dots = "...";
    if (text.length > limit) {
      text = text.substring(0, limit) + dots;
      setShortDescr(true);
    } else {
      setShortDescr(false);
    }
    return text;
  }

  React.useEffect(() => {
    const getDescription = async () => {
      const country: any = t(currentCountry?.name as string) || '';
      const wiki: any = await wikiGet(country, lang);
      const [first]: any = Object.keys(wiki.query.pages);
      const text = wiki.query.pages[first].extract;
      setDescr(fullDescr ? text : add3Dots(text, 500));
    };

    getDescription();
  }, [lang, fullDescr]);

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

  const expander = fullDescr ? (
    <IconButton
      onClick={() => setFullDescr(false)}
      color='inherit'
    ><ArrowDropUpIcon /></IconButton>
  ) : (
    <IconButton
      onClick={() => setFullDescr(true)}
      color='inherit'
    ><ArrowDropDownIcon /></IconButton>
  );

  return currentCountryData && currentCountry ? (
    <>
      <Polaroid>
        <CountryLogo src={currentCountry?.preview} alt={currentCountry.name} />
        <CountryContainer>
          <CountryName>{t(currentCountry.name)}</CountryName>
        </CountryContainer>
      </Polaroid>
      <Box mt={4} mb={4}>
        <Toolbar>
          <Container maxWidth='lg'>
            <Description>{descr}{shortDescr && expander}</Description>
            <Grid container direction='row' justify='center'>
              <Capital>
                <CapitalImage src={currentCountry?.image} alt={currentCountry.capital} />
                <CapitalContainer>
                  <p>{t(currentCountry.capital)}</p>
                </CapitalContainer>
              </Capital>
              <Box mt={4} mb={4} className='map-box'>
                {mapComponent}
              </Box>
            </Grid>
          </Container>
        </Toolbar>
        <Toolbar>
          <Container maxWidth='md'>
            <Box mt={4} mb={4}>
              <CountryImageGallery name={currentCountry.capital} lang={lang} />
            </Box>
          </Container>
        </Toolbar>
        <Toolbar>
          <Container maxWidth='md'>
            <Box mt={4} mb={4}>
              <Video embedId={currentCountry.embedId} />
            </Box>
          </Container>
        </Toolbar>
        <Toolbar>
          <Container maxWidth='md'>
            <Box mt={4} mb={4}>
              <WidgetsGrid container direction='row' justify='space-between' spacing={2}>
                <Grid item xs={5}>
                  <Weather query={currentCountry.capital} lang={lang} />
                </Grid>
                <Grid item xs={3}>
                  <Exchange />
                </Grid>
                <Grid item xs={4}>
                  <CapitalTime capitalName={currentCountryData.capital} region={currentCountryData.region} />
                </Grid>
              </WidgetsGrid>
            </Box>
          </Container>
        </Toolbar>
      </Box>
    </>
  ) : (
    <div className='overlay'>
      <CircularProgress size={120} />
    </div>
  );
};
