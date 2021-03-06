import axios from 'axios';

const URL: string = 'http://api.openweathermap.org/data/2.5/weather';
const APIKEY: string = '995905e2fb21d6bf45a41cd5f589d28b';

export const fetchWeather = async(query: string) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: APIKEY
        }
    });
    return data;
 }

