import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import spain from '../../assets/img/spain.jpg';

import './CountryCard.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 380,
    borderRadius: '16px',
  },
  image: {
    borderRadius: '16px',
  },
});

const CountryCard = () => {
  const classes = useStyles();
  return (
    <Card className={`card ${classes.root}`}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="country card"
          height="380"
          image={spain}
          className={classes.image}
          title="country card"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Madrid, Spain
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CountryCard;
