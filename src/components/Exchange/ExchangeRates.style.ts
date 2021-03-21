import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  exchange: {
    backgroundColor: '#100774',
    boxShadow: 'none',
    color: 'white',
    padding: '20px 15px',
    fontSize: '24px',
  },

  content: {
    display: 'flex',
    justifyContent: 'center',
  },

  item: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  exchangeCurrent: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10,
  },
}));
