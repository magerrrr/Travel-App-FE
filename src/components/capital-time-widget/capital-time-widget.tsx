import * as React from 'react';
import * as moment from 'moment-timezone';
import 'moment/locale/es';
import 'moment/locale/ru';
import CircularProgress from '@material-ui/core/CircularProgress';

moment.locale('fr');

const { useState, useEffect } = React;

type CapitalTimeProps = {
  capitalName: string,
  region: string,
};

type DateTimeObj = {
  value: number,
  date: string,
  time: string,
};

const CapitalTime = (props: CapitalTimeProps) => {
  const { capitalName, region } = props;
  const [dateTimeObj, setDateTime] = useState<DateTimeObj>();

  useEffect(() => {
    const updateDateTime = () => {
      moment().locale('de');
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
  }, [capitalName, region, dateTimeObj]);

  return (
    <>
      {
        dateTimeObj ? (
          <div>
            <span>{dateTimeObj.date}</span>
            <span>{dateTimeObj.time}</span>
          </div>
        ) : <CircularProgress size={120} />
      }
    </>
  );
};

export default CapitalTime;
