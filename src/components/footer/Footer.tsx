import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import logo from '../../assets/img/logo-rsschool.png';
import inna from '../../assets/img/inna.jpg';
import nastya from '../../assets/img/nastya.jpg';
import kira from '../../assets/img/kira.jpg';
import { useStyles } from './Footer.style';

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
          <Avatar alt='Inna' src={inna} className={classes.small} />
          <Avatar alt='Anastasiya' src={nastya} className={classes.small} />
          <Avatar alt='Sergey' className={[classes.circle, classes.small].join(' ')}>SN</Avatar>
          <Avatar alt='Kirill' src={kira} className={classes.large} />
        </div>
      </Toolbar>
    </footer>
  );
};

export default Footer;
