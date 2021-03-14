import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CountryCard from '../country-card';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './CountryCardsContainer.scss';
import { countries } from "./stubs";
import { SearchContext } from "../../context/SearchContext";
import { useStyles } from './CountryCardsContainer.style';

const CountryCardsContainer: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { searchText } = React.useContext(SearchContext);
  const toSearch = searchText ? searchText.trim().toLowerCase() : null;

  const countriesFilter = ({ name, capital }: any) => {
    const countryName = name.trim().toLowerCase();
    const countryCapital = capital.trim().toLowerCase();
    if (countryName.includes(toSearch) || countryCapital.includes(toSearch)) {
      return true;
    }
    return false;
  }
  const filteredCountries = toSearch ? countries.filter(countriesFilter) : countries;
  const items = filteredCountries.map((row, rowIndex) => {
    return (
      <Grid item key={rowIndex}>
        <CountryCard country={row} />
      </Grid>
    );
  });

  return (
    <Toolbar>
      <Container maxWidth='lg' className={classes.cards}>
        <div className={classes.title}>
          {t('Cards Heading')}
        </div>
        <Grid container justify="center" className={classes.cards} spacing={5}>
          {items}
        </Grid>
      </Container>
    </Toolbar>
  );
}

export default CountryCardsContainer;
