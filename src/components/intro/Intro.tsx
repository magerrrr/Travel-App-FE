import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useImage } from 'react-image';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import image from '../../assets/img/travel_app-min.jpg';
import { SearchContext } from '../../context/SearchContext';
import './Intro.scss';
import { useStyles } from './Intro.style';

const Intro: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { searchText, setSearchText } = React.useContext(SearchContext);
  const { src } = useImage({
    srcList: image,
  });

  const onSearchClick = () => {
    setSearchText(searchText);
  };

  const onKeyUp = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.ctrlKey && event.key === 'Enter') {
      const target = event.target as HTMLTextAreaElement;
      setSearchText(target.value);
    }
  };

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
              onChange={(e) => setSearchText(e.target.value)}
              onKeyUp={onKeyUp}
              placeholder={t('search')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <IconButton className={classes.searchIcon} onClick={onSearchClick}>
                      <SearchIcon />
                    </IconButton>
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
          <img src={src} alt='travel' />
        </div>
      </Grid>
    </Container>
  );
};

export default Intro;
