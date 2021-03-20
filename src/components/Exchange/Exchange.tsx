import * as React from 'react';
import { Card } from '@material-ui/core';
import { FC, useState, useEffect } from 'react';
import { useStyles } from './ExchangeRates.style';
import axios from 'axios';
import CountryApiService from '../../services/countryApiService';

const URL = 'https://api.exchangerate.host/latest?base=';

const USD = 'USD';
const EUR = 'EUR';
const RUB = 'RUB';

const Exchange: FC = () => {
  const classes = useStyles();
  const [code, setCode] = useState('');
  const [ratesListUSD, setRatesListUSD] = useState([]);
  const [ratesListEUR, setRatesListEUR] = useState([]);
  const [ratesListRUB, setRatesListRUB] = useState([]);

  //get services api
  const api = new CountryApiService();
  type CurrentCountryDataTypes = {
    id: number;
    name: string;
    capital: string;
    image: string;
    preview?: string;
  };

  const [currentCountryData, setCurrentCountryData] = useState<CurrentCountryDataTypes | null>(
    null,
  );

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await api.getCountryData('Belarus');
      setCurrentCountryData(fetchedData);
      setCode(fetchedData.currencies[0].code);
    };

    getData();
  }, []);

  useEffect(() => {
    const getRates = async () => {
      const { data } = await axios.get(`${URL}${USD}`);
      const rates: [] = data.rates;
      const ratesTemp = [] as any;
      for (const [symbol, rate] of Object.entries(rates)) {
        ratesTemp.push({ symbol, rate });
      }
      setRatesListUSD(ratesTemp);
    };
    getRates();
  }, []);

  useEffect(() => {
    const getRates = async () => {
      const { data } = await axios.get(`${URL}${EUR}`);
      const rates: [] = data.rates;
      console.log(rates);
      const ratesTemp = [] as any;
      for (const [symbol, rate] of Object.entries(rates)) {
        ratesTemp.push({ symbol, rate });
      }
      setRatesListEUR(ratesTemp);
    };
    getRates();
  }, []);

  useEffect(() => {
    const getRates = async () => {
      const { data } = await axios.get(`${URL}${RUB}`);
      const rates: [] = data.rates;
      const ratesTemp = [] as any;
      for (const [symbol, rate] of Object.entries(rates)) {
        ratesTemp.push({ symbol, rate });
      }
      setRatesListRUB(ratesTemp);
    };
    getRates();
  }, []);

  return (
    <Card className={classes.exchange}>
      {}
      <div className={classes.exchangeCurrent}>
        {currentCountryData !== null ? currentCountryData.currencies[0].code : 'BYN'}
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
          {' '}
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
