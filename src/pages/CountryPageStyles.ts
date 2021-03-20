import styled from 'styled-components';
import { styled as muiStyled } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const Polaroid = styled.div`
  margin: 25px auto;
  width: 50%;
  background-color: #525ae9;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const Capital = styled.div`
  margin: 32px 64px 64px 0;
  width: 256px;
  background-color: #525ae9;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  height: 380px;

  @media (max-width: 736px) {
    width: 380px;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 32px;
  }
`;

const CapitalImage = styled.img`
  max-width: 100%;
  width: 100%;
  border-radius: 20px;
  height: calc(100% - 4em);
  object-fit: cover;
`;

const CountryLogo = styled.img`
  max-width: 100%;
  width: 100%;
  min-height: auto;
  border-radius: 20px;
`;

const CountryContainer = styled.div`
  text-align: center;
  padding: 10px 20px;
`;

const CapitalContainer = styled.div`
  text-align: center;
`;

const CountryName = styled.p`
  color: white;
`;

const WidgetsGrid = styled(Grid)({
  ['@media (max-width: 600px)']: {
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      width: '100%',
      maxWidth: '100%',
      flexBasis: '100%',
    },
  },
  ['@media (min-width: 600px) and (max-width: 736px)']: {
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      width: '60%',
      maxWidth: '60%',
      flexBasis: '60%',
    },
  },
  ['@media (min-width: 736px) and (max-width: 1000px)']: {
    justifyContent: 'center',
    '& > *': {
      width: '50%',
      maxWidth: '50%',
      flexBasis: '50%',
      '&:nth-child(2)': {
        order: 3,
      },
    },
  },
});

export {
  Polaroid,
  CountryLogo,
  CountryContainer,
  CountryName,
  Capital,
  CapitalImage,
  CapitalContainer,
  WidgetsGrid,
};
