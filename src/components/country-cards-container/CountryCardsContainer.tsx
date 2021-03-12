import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CountryCard from '../country-card';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './CountryCardsContainer.scss';
import spain from '../../assets/img/spain.jpg';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 380,
    borderRadius: '16px',
  },
  image: {
    borderRadius: '16px',
  },
  cards: {
    marginTop: theme.spacing(5)
  },
  title: {
    fontSize: '3em',
    fontFamily: 'inherit',
    fontWeight: 600,
    textAlign: 'center',
    marginTop: theme.spacing(5)
  }
}));

const CountryCardsContainer = () => {
  const classes = useStyles();
  const country = { name: 'Spain', capital: 'Madrid', image: spain };
  return (
    <Toolbar>
      <Container maxWidth='lg' className={classes.cards}>
        <div className={classes.title}>
          Top Countries
        </div>
        <Grid container justify="center" className={classes.cards} spacing={5}>
          <Grid item>
            <CountryCard country={country}/>
          </Grid>
          <Grid item>
            <CountryCard country={country}/>
          </Grid>
          <Grid item>
            <CountryCard country={country}/>
          </Grid>
          <Grid item>
            <CountryCard country={country}/>
          </Grid>
          <Grid item>
            <CountryCard country={country}/>
          </Grid>
          <Grid item>
            <CountryCard country={country}/>
          </Grid>
        </Grid>
      </Container>
    </Toolbar>
  );
}

export default CountryCardsContainer;
