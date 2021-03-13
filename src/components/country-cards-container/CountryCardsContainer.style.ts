import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme: Theme) => ({
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
