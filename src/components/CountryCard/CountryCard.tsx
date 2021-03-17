import * as React from 'react';
import { Link } from 'react-router-dom';
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

type CountryCardType = {
  id: number,
  country: {
    name: string,
    capital: string,
    image: string,
  }
};

const CountryCard: React.FC<CountryCardType> = ({ id, country }: CountryCardType) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { name, capital, image } = country;
  const { src } = useImage({
    srcList: image,
  });
  return (
    <Card className={`card ${classes.root}`}>
      <Link to={`/country/${id}`}>
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
              ,&nbsp;
              {t(name)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default CountryCard;
