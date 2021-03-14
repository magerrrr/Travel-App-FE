import * as React from 'react';
import { FC } from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from './Weather.style';
import { fetchWeather } from '../Weather/fetchWeather';
import { TextField } from '@material-ui/core';

const Weather: FC = () => {
  const classes = useStyles();

  const [query, setQuery] = React.useState('');
  const [weather, setWeather] = React.useState<any>({});

  const search = async (e: any) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery('');
    }
  };

  return (
    <div>
      <TextField
        id="filled-full-width"
        label="Search city"
        style={{ margin: 8 }}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        type="text"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyPress={search}
      />

      <Card className={classes.weather}>
        {(weather.main && (
          <div className={classes.content}>
            <div className={classes.item}>
              <div>
                {weather.name} / {weather.sys.country}
              </div>
              <div className={classes.temp}>
                {Math.round(weather.main.temp)}
                <sup>&deg;</sup>C
              </div>
            </div>
            <div className={classes.item}>
              <img
                src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                className={classes.image}
              />
              <div className={classes.descr}>{weather.weather[0].main}</div>
            </div>
          </div>
        )) || (
          <div className={classes.content}>
            <div className={classes.item}>
              <div>Minsk</div>
              <div className={classes.temp}>
                1<sup>&deg;</sup>C
              </div>
            </div>
            <div className={classes.item}>
              <img src="http://openweathermap.org/img/wn/03d.png" className={classes.image} />
              <div className={classes.descr}>Cloud</div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Weather;
