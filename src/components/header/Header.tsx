import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Link from '@material-ui/core/Link';
import { useTranslation } from "react-i18next";
import UserAvatar from "./components/avatar";

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

const Header: React.FC = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [lang, setLang] = React.useState(i18n.languages[0].split("-")[0]);

  const handleChange = (event: any) => {
    let newlang = event.target.value;
    setLang(newlang);
    i18n.changeLanguage(newlang);
  };

  const profile = {
    name: "ana",
    photo: "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s150x150/17495027_448957902102354_4515916038797262848_a.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=ry6dJkhvx5AAX-sFyGH&oh=af8e66524c2eaf475e3466df49389e31&oe=60722762",
  }

  return (
    <div className={classes.grow}>
      <AppBar className={classes.header} position='static'>
        <Toolbar>
          <Typography className={classes.title} variant='h1' noWrap>
            Travel App
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <FormControl variant='outlined' className="lang-select" classes={{
              root: classes.formControl,
            }}>
              <Select
                classes={{
                  root: classes.select,
                  icon: classes.selectIcon,
                }}
                displayEmpty
                value={lang}
                onChange={handleChange}
              >
                <MenuItem className={classes.menuItem} value='en'>EN</MenuItem>
                <MenuItem className={classes.menuItem} value='ru'>RU</MenuItem>
                <MenuItem className={classes.menuItem} value='es'>ES</MenuItem>
              </Select>
            </FormControl>
            <Link className={classes.grow}
              component='button'
              variant='body2'
              onClick={() => { }}
            >
              {t("login")}
            </Link>
            <UserAvatar profile={profile} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
