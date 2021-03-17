import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 380,
    borderRadius: theme.spacing(2),
  },
  image: {
    borderRadius: theme.spacing(2),
  },
  cards: {
    marginTop: '1rem'
  },
  title: {
    fontSize: '3em',
    fontFamily: 'inherit',
    fontWeight: 600,
    textAlign: 'center',
    marginTop: '3rem',
    [theme.breakpoints.down('xs')]: {
      marginRight: '1rem',
      marginTop: '2rem',
      marginBottom: '1rem',
      fontSize: '2em',
    },
  }
}));
