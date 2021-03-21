import * as React from 'react';
import { Card } from '@material-ui/core';
import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { useStyles } from './ExchangeRates.style';

const URL = 'https://api.exchangerate.host/latest?base=';

const USD = 'USD';
const EUR = 'EUR';
const RUB = 'RUB';

type TExchange = {
  code: string;
};

const Exchange: FC<TExchange> = ({ code }) => {
  const classes = useStyles();
  const [ratesListUSD, setRatesListUSD] = useState([]);
  const [ratesListEUR, setRatesListEUR] = useState([]);
  const [ratesListRUB, setRatesListRUB] = useState([]);

  const getRates = async (currency: string) => {
    const { data } = await axios.get(`${URL}${currency}`);
    const { rates } = data;
    const ratesTemp = [] as any;
    for (const [symbol, rate] of Object.entries(rates)) {
      ratesTemp.push({ symbol, rate });
    }
    return ratesTemp;
  };

  useEffect(() => {
    const getAllRates = async () => {
      setRatesListUSD(await getRates(USD));
      setRatesListEUR(await getRates(EUR));
      setRatesListRUB(await getRates(RUB));
    };
    getAllRates();
  }, []);

  return (
    <Card className={classes.exchange}>
      {}
      <div className={classes.exchangeCurrent}>
        {code || 'BYN'}
      </div>
      <div className={classes.item}>
        <div>USD $</div>
        <div>
          {ratesListUSD.map((item: any) => {
            if (item.symbol === code) {
              return item.rate.toFixed(3);
            }
          })}
        </div>
      </div>
      <div className={classes.item}>
        <div>RUB &#8381;</div>
        <div>
          {ratesListRUB.map((item: any) => {
            if (item.symbol === code) {
              return item.rate.toFixed(3);
            }
          })}
        </div>
      </div>
      <div className={classes.item}>
        <div>EUR &euro;</div>
        <div>
          {ratesListEUR.map((item: any) => {
            if (item.symbol === code) {
              return item.rate.toFixed(3);
            }
          })}
        </div>
      </div>
    </Card>
  );
};

export default Exchange;
