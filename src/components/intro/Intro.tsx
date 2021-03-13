import * as React from 'react';
import { SearchContext } from "../../context/SearchContext";
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';
import image from '../../assets/img/travel_app.jpg';

import './Intro.scss';
import { useStyles } from './Intro.style';

const Intro: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { setSearchText } = React.useContext(SearchContext);
  return (
    <Container maxWidth='lg' className='intro'>
      <Grid
        className={classes.introGrid}
        container
        direction='row'
        justify='space-between'
        alignItems='center'
      >
        <Box display='flex' flexDirection='column'>
          <div className={classes.introText}>
            <div>{t('IntroductionLeft')}</div>
            <div>{t('IntroductionRight')}</div>
          </div>
          <div className={classes.search}>
            <TextField
              type='search'
              variant='outlined'
              margin='normal'
              autoComplete='off'
              autoFocus
              onChange={(e) => { console.log(e.target.value); setSearchText(e.target.value); }}
              placeholder={t('search')}
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
