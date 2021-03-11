import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  '@global': {
    body: {
      margin: '0 auto',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
      color: '#100774',
    },
  },
  title: {
    fontSize: '2em',
    fontFamily: 'inherit',
    fontWeight: 600,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  header: {
    backgroundColor: '#91B3FA',
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    justifyContent: 'center',

    [theme.breakpoints.down('xs')]: {
      flexGrow: 3,
    }
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  menuItem: {
    fontFamily: 'inherit',
    color: '#100774',
  },
  select: {
    padding: '8px',
    borderColor: '#fff',
    color: '#fff',
    '&:focus': {
      borderColor: '#fff',
    },
  },
  selectInput: {
    width: '60px',
  },
  selectIcon: {
    fill: '#fff',
  },
}));
