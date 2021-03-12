import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import logo from '../../assets/img/logo-rsschool.png';
import inna from '../../assets/img/inna.jpg';
import nastya from '../../assets/img/nastya.jpg';
import sergey from '../../assets/img/sergey.jpg';
import kira from '../../assets/img/kira.jpg';
import { useStyles } from './Footer.style';
import Link from '@material-ui/core/Link';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.logo}>
          <img src={logo} alt='Rolling Scopes School Logo' height='50' className='header-logo' />
        </div>
        <Typography component='p' className={classes.copyright}>
          @2021
        </Typography>
        <div className={classes.team}>
          <Link href="https://github.com/inna-rekesh" target="_blank" rel="noopener noreferrer" >
            <Avatar alt='Inna Rekesh' src={inna} className={classes.small} />
          </Link>
          <Link href="https://github.com/anasidorovich" target="_blank" rel="noopener noreferrer" color="inherit">
            <Avatar alt='Anastasiya Sidarovich' src={nastya} className={classes.small} />
          </Link>
          <Link href="https://github.com/SergeyNaumenko" target="_blank" rel="noopener noreferrer" variant="body2">
            <Avatar alt='Sergey Naumenko' src={sergey} className={classes.small} />
          </Link>
          <Link href="https://github.com/magerrrr" target="_blank" rel="noopener noreferrer" variant="body2">
            <Avatar alt='Kirill Mager' src={kira} className={classes.large} />
          </Link>
        </div>
      </Toolbar>
    </footer>
  );
};

export default Footer;
