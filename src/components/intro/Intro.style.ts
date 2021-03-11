import { fade, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  introBox: {
    minWidth: '30%',
  },
  introText: {
    marginRight: '2rem',
    marginTop: '2rem',
    marginBottom: '2rem',
    fontSize: '3em',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginRight: 0,
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: '1rem',
      marginTop: '1rem',
      marginBottom: '1rem',
      fontSize: '2em',
    },
  },
  introGrid: {
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
    },
  },
  introImg: {
    '& img': {
      width: '100%',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#91B3FA',
  },
  inputRoot: {
    color: 'inherit',
    fontFamily: 'inherit',
    paddingLeft: 0,
    '&:focus': {
      border: '1px solid #91B3FA',
      outlineColor: '#91B3FA',
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: '#100774',
    [theme.breakpoints.up('sm')]: {
      width: '150px',
      '&:focus': {
        width: '30ch',
      },
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
}));
