import * as React from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';
import { FC, useState, useEffect } from 'react';
import { useStyles } from './ExchangeRates.style';

const URL = 'https://api.exchangerate.host/latest?base=';

const USD = 'USD';
const EUR = 'EUR';
const RUB = 'RUB';

const Exchange: FC = ({ codeCurrency = 'BYN' }) => {
  const classes = useStyles();
  const [ratesListUSD, setRatesListUSD] = useState([]);
  const [ratesListEUR, setRatesListEUR] = useState([]);
  const [ratesListRUB, setRatesListRUB] = useState([]);

  const getRates = async (base: string) => {
    const { data } = await axios.get(`${URL}${base}`);
    const { rates } = data;
    const ratesTemp = [] as any;
    Object.entries(rates).forEach(([symbol, rate]) => {
      ratesTemp.push({ symbol, rate });
    });
    return ratesTemp;
  };

  useEffect(() => {
    const getAllRates = async () => {
      setRatesListEUR(await getRates(EUR));
      setRatesListUSD(await getRates(USD));
      setRatesListRUB(await getRates(RUB));
    };
    getAllRates();
  }, []);

  return (
    <Card className={classes.exchange}>
      {}
      <div className={classes.exchangeCurrent}>{codeCurrency !== null ? codeCurrency : 'BYN'}</div>
      <div className={classes.item}>
        <div>USD $</div>
        <div>
          {ratesListUSD.map((item: any) => {
            if (item.symbol === codeCurrency) {
              return item.rate.toFixed(3);
            }
            return null;
          })}
        </div>
      </div>
      <div className={classes.item}>
        <div>RUB &#8381;</div>
        <div>
          {ratesListRUB.map((item: any) => {
            if (item.symbol === codeCurrency) {
              return item.rate.toFixed(3);
            }
            return null;
          })}
        </div>
      </div>
      <div className={classes.item}>
        <div>EUR &euro;</div>
        <div>
          {' '}
          {ratesListEUR.map((item: any) => {
            if (item.symbol === codeCurrency) {
              return item.rate.toFixed(3);
            }
            return null;
          })}
        </div>
      </div>
    </Card>
  );
};

export default Exchange;
