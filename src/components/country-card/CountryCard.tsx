import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useImage } from 'react-image';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './CountryCard.scss';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 380,
    borderRadius: '26px',
    color: '#100774',
    [theme.breakpoints.down('xs')]: {
      width: 256,
    },
  },
  image: {
    borderRadius: '26px',
  },
}));

interface ICountryCard {
  country: {
    name: string
    capital: string
    image: string
  }
}

const CountryCard: React.FC<ICountryCard> = ({ country }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { name, capital, image } = country;
  const { src } = useImage({
    srcList: image,
  });
  return (
    <Card className={`card ${classes.root}`}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='country card'
          height='256'
          image={src}
          className={classes.image}
          title='country card'
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='h2'>
            {t(capital)}
            ,
            {t(name)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CountryCard;
