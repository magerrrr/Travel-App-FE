import { fade, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  introText: {
    marginRight: '2rem',
    marginBottom: '2rem',
    marginTop: '3rem',
    fontSize: '3em',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginRight: 0,
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: '1rem',
      marginBottom: '1rem',
      fontSize: '2em',

    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
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
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    }
  },
  searchIcon: {
    padding: '0px 6px 0 7px',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    backgroundColor: '#91B3FA',
    borderRadius: '5px',
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
    width: '120px',
    color: '#100774',
    '&:focus': {
      width: '20ch',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
}));
