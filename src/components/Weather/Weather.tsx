import * as React from 'react';
import { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from './Weather.style';
import { fetchWeather } from './fetchWeather';

const Weather = ({ query, lang }: any) => {
  const classes = useStyles();

  const [weather, setWeather] = React.useState<any>({});

  useEffect(() => {
    const getData = async () => {
      const data = await fetchWeather(query, lang);
      setWeather(data);
    };
    getData();
  }, [lang]);

  return (
    <div>
      <Card className={classes.weather}>
        {(weather.main && (
          <div className={classes.content}>
            <div className={classes.item}>
              <div>
                {weather.name}
                &nbsp;/&nbsp;
                {weather.sys.country}
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
                alt='weather icon'
              />
              <div className={classes.descr}>{weather.weather[0].description}</div>
            </div>
          </div>
        )) || (
        <div className={classes.content}>
          <div className={classes.item}>
            <div />
            <div className={classes.temp}>
              1
              <sup>&deg;</sup>
              C
            </div>
          </div>
          <div className={classes.item}>
            <img
              src='https://openweathermap.org/img/wn/03d.png'
              className={classes.image}
              alt='weather'
            />
            <div className={classes.descr} />
          </div>
        </div>
        )}
      </Card>
    </div>
  );
};

export default Weather;
