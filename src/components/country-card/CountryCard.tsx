import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import './CountryCard.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 380,
    borderRadius: '26px',
    color: '#100774',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#525AE9'
    }
  },
  image: {
    borderRadius: '26px',
  }
});

interface ICountryCard {
  country: {
    name: string
    capital: string
    image: string
  }
}

const CountryCard: React.FC<ICountryCard> = ({ country }) => {
  const classes = useStyles();
  const { name, capital, image } = country;
  return (
    <Card className={`card ${classes.root}`}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="country card"
          height="380"
          image={image}
          className={classes.image}
          title="country card"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {capital},{name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CountryCard;
