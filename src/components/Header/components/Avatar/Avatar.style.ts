import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        marginRight: 0
      },
    },
    circle: {
      color: '#fff',
      backgroundColor: '#FF7C72',
      textTransform: 'uppercase',
      fontFamily: 'inherit',
    },
  }),
);
