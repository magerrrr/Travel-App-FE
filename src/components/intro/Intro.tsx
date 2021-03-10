import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { fade, makeStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';
import image from '../../assets/img/travel_app.jpg';

import './Intro.scss';

const useStyles = makeStyles((theme: Theme) => ({
  introText: {
    marginRight: '2rem',
    marginBottom: '2rem',
    fontSize: '3em',
    overflowWrap: 'break-word',
    width: '280px',
  },
  introImg: {
    width: '50vw',
    '& img': {
      width: '100%',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',

  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#91B3FA',
  },
  inputRoot: {
    color: 'inherit',
    fontFamily: 'inherit',
    paddingLeft: 0,
    '&:focus': {
      border: '1px solid #91B3FA',
      outlineColor: '#91B3FA',
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: '#100774',
    [theme.breakpoints.up('sm')]: {
      width: '100px',

      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Intro: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg' className='intro'>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Box display='flex' flexDirection='column'>
          <div className={classes.introText}>Explore The World!</div>
          <div className={classes.search}>
            <TextField
              type='search'
              variant='outlined'
              margin='normal'
              autoComplete='off'
              autoFocus
              placeholder='Search...'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon className={classes.searchIcon} />
                  </InputAdornment>
                ),
                classes: {
                  root: classes.inputRoot,
                  input: classes.inputInput,

                },
              }}
            />
          </div>
        </Box>
        <div className={classes.introImg}>
          <img src={image} alt='travel' />
        </div>
      </Grid>
    </Container>
  );
};

export default Intro;
