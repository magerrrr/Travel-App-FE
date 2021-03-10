import * as React from 'react';
import {
  makeStyles, Theme,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Link from '@material-ui/core/Link';
import './Header.scss';

const useStyles = makeStyles((theme: Theme) => ({
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
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 70,
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
  selectIcon: {
    fill: '#fff',
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();
  const [lang, setLang] = React.useState('');

  const handleChange = (event: any) => {
    setLang(event.target.value);
  };

  return (
    <div className={classes.grow}>
      <AppBar className={classes.header} position='static'>
        <Toolbar>
          <Typography className={classes.title} variant='h1' noWrap>
            Travel App
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <FormControl variant='outlined' className={classes.formControl}>
              <Select
                classes={{
                  root: classes.select,
                  icon: classes.selectIcon,
                }}
                displayEmpty
                value={lang}
                onChange={handleChange}
              >
                <MenuItem className={classes.menuItem} value=''>
                  EN
                </MenuItem>
                <MenuItem className={classes.menuItem} value={20}>RU</MenuItem>
                <MenuItem className={classes.menuItem} value={30}>SP</MenuItem>
              </Select>
            </FormControl>
            <Link
              component='button'
              variant='body2'
              onClick={() => { }}
            >
              Log In
            </Link>
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-haspopup='true'
              onClick={() => { }}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
