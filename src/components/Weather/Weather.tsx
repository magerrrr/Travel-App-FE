import * as React from 'react';
import { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { TextField } from '@material-ui/core';
import { useStyles } from './Weather.style';
import { fetchWeather } from './fetchWeather';

const Weather = ({ startQuery, t }: any) => {
  const classes = useStyles();

  const [query, setQuery] = React.useState(startQuery);
  const [weather, setWeather] = React.useState<any>({});

  const getData = async () => {
    const data = await fetchWeather(query);
    setWeather(data);
    setQuery('');
  };

  const search = async (e: any) => {
    if (e.key === 'Enter') {
      getData();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <TextField
        id='filled-full-width'
        label={t('search')}
        style={{ margin: 8, marginLeft: 0 }}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        variant='filled'
        type='text'
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
                {t(weather.name)}&nbsp;/&nbsp;{weather.sys.country}
              </div>
              <div className={classes.temp}>
                {Math.round(weather.main.temp)}
                <sup>&deg;</sup>
                C
              </div>
            </div>
            <div className={classes.item}>
              <img
                src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
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
              1
              <sup>&deg;</sup>
              C
            </div>
          </div>
          <div className={classes.item}>
            <img src='http://openweathermap.org/img/wn/03d.png' className={classes.image} />
            <div className={classes.descr}>Cloud</div>
          </div>
        </div>
        )}
      </Card>
    </div>
  );
};

export default Weather;
