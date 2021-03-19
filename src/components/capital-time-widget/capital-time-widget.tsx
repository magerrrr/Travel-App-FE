import * as React from 'react';
import * as moment from 'moment-timezone';
import 'moment/locale/es';
import 'moment/locale/ru';
import CircularProgress from '@material-ui/core/CircularProgress';
import { I18nContext } from 'react-i18next';

const { useState, useEffect, useContext } = React;
import { Capital } from './styles';

type CapitalTimeProps = {
  capitalName: string;
  region: string;
};

type DateTimeObj = {
  value: number;
  date: string;
  time: string;
};

const CapitalTime = (props: any) => {
  const { capitalName, region } = props;
  const [dateTimeObj, setDateTime] = useState<DateTimeObj>();
  const i18nContext = useContext(I18nContext);
  const lang = i18nContext.i18n.language;

  useEffect(() => {
    const updateDateTime = () => {
      moment.locale(i18nContext.i18n.language);
      const dateTime = moment().tz(`${region}/${capitalName}`);
      const obj: DateTimeObj = {
        value: moment().valueOf(),
        date: dateTime.format('LL'),
        time: dateTime.format('LTS'),
      };
      setDateTime(obj);
    };
    const timeoutId = setTimeout(updateDateTime, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [capitalName, region, dateTimeObj, lang]);

  return dateTimeObj ? (
    <Capital>
      <span>{dateTimeObj.date}&nbsp;</span>
      <span>{dateTimeObj.time}</span>
    </Capital>
  ) : (
    <CircularProgress size={120} />
  );
};

export default CapitalTime;
