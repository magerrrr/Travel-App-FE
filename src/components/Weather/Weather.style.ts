import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  weather: {
    backgroundColor: '#91B3FA',
    boxShadow: 'none',
    color: 'white',
    padding: '20px 15px',
    fontSize: '20px',
  },

  content: {
    display: 'flex',
    justifyContent: 'center',
  },

  item: {
    padding: '0 20px',
    textAlign: 'center',
  },

  temp: {
    fontSize: '48px',
  },
  image: {
    width: 'auto',
  },
  descr: {
    fontSize: '15px',
    textTransform: 'capitalize',
  },
}));
