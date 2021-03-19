import * as React from 'react';
import { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { TextField } from '@material-ui/core';
import { useStyles } from './Weather.style';
import { fetchWeather } from './fetchWeather';
import { translateText } from '../../utils';

const Weather = ({ startQuery, t, lang }: any) => {
  const classes = useStyles();

  const [query, setQuery] = React.useState(startQuery);
  const [weather, setWeather] = React.useState<any>({});

  useEffect(() => {
    const getData = async () => {
      const data = await fetchWeather(query);
      data.descr = await translateText(data.weather[0].main, lang);
      setWeather(data);
      setQuery('');
    };
    getData();
  }, []);

  return (
    <div>
      <Card className={classes.weather}>
        {(weather.main && (
          <div className={classes.content}>
            <div className={classes.item}>
              <div>
                {t(weather.name)}&nbsp;/&nbsp;{weather.sys.country}
              </div>
              <div className={classes.temp}>
                {Math.round(weather.main.temp)}
                <sup>&deg;</sup>C
              </div>
            </div>
            <div className={classes.item}>
              <img
                src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                className={classes.image}
              />
              <div className={classes.descr}>{weather.descr}</div>
            </div>
          </div>
        )) || (
            <div className={classes.content}>
              <div className={classes.item}>
                <div></div>
                <div className={classes.temp}>
                  1<sup>&deg;</sup>C
              </div>
              </div>
              <div className={classes.item}>
                <img src="http://openweathermap.org/img/wn/03d.png" className={classes.image} />
                <div className={classes.descr}></div>
              </div>
            </div>
          )}
      </Card>
    </div>
  );
};

export default Weather;
