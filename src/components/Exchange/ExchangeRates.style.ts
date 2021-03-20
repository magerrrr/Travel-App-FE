import { makeStyles, Theme } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme: Theme) => ({
    '@global': {
      body: {
        margin: '0 auto',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 600,
        color: '#100774',
      },
    },
    exchange: {
      backgroundColor: '#100774',
      boxShadow: 'none',
      color: 'white',
      padding: '20px 15px',
      width: '25%',
      fontSize: '24px',
    },

    content: {
      display:'flex',
      justifyContent: 'center',
    },

    item: {
      display: 'flex',
      justifyContent: 'space-between',

    },

    exchangeCurrent: {
      display: 'flex',
      justifyContent: 'center',
    }

}))