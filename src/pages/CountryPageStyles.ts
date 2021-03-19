import styled from 'styled-components';

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

export { Polaroid, CountryLogo, CountryContainer, CountryName, Capital, CapitalImage, CapitalContainer };
