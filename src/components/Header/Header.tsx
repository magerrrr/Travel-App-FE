import * as React from 'react';
import { useTranslation } from 'react-i18next';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import UserAvatar from './components/Avatar';

import { useStyles } from './Header.style';
import './Header.scss';

const Header: React.FC = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [lang, setLang] = React.useState(i18n.languages[0].split('-')[0]);

  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLang = (event: any) => {
    const newlang = event.target.value;
    setLang(newlang);
    i18n.changeLanguage(newlang);
  };

  const profile = {
    name: 'ana',
    photo: '',
  };

  const avatar = auth ? <UserAvatar profile={profile} />
    : <AccountCircle className={classes.circle} />;

  return (
    <div className={classes.grow}>
      <AppBar className={classes.header} position='static'>
        <Toolbar>
          <Typography className={classes.title} variant='h1' noWrap>
            Travel App
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <FormControl
              variant='outlined'
              className='lang-select'
              classes={{
                root: classes.formControl,
              }}
            >
              <Select
                classes={{
                  root: classes.select,
                  icon: classes.selectIcon,
                }}
                displayEmpty
                value={lang}
                onChange={handleChangeLang}
              >
                <MenuItem className={classes.menuItem} value='en'>EN</MenuItem>
                <MenuItem className={classes.menuItem} value='ru'>RU</MenuItem>
                <MenuItem className={classes.menuItem} value='es'>ES</MenuItem>
              </Select>
            </FormControl>
            <Link
              className={classes.grow}
              component='button'
              variant='body2'
              onClick={() => { }}
            >
              {t('login')}
            </Link>
            <div>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                {avatar}
                <ArrowDropDownIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>{t('Registration')}</MenuItem>
                <MenuItem onClick={handleClose}>{t('logout')}</MenuItem>
              </Menu>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
