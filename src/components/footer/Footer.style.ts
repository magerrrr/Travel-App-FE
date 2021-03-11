import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  footer: {
    backgroundColor: '#100774',
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  team: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  circle: {
    color: '#fff',
    backgroundColor: '#FF7C72',
    textTransform: 'uppercase',
    fontFamily: 'inherit',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  copyright: {
    color: '#fff',
    fontFamily: 'inherit',
    fontSize: 20,
    fontWeight: 600,
  },
  logo: {
  }
}));
