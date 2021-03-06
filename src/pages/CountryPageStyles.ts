import styled from 'styled-components';

const Polaroid = styled.div`
  margin: 25px auto;
  width: 50%;
  background-color: #525ae9;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const CountryLogo = styled.img`
  max-width: 100%;
  width: 100%;
  min-height: auto;
  border-radius: 20px;
`;

const Container = styled.div`
  text-align: center;
  padding: 10px 20px;
`;

const CountryName = styled.p`
  color: white;
`;

export { Polaroid, CountryLogo, Container, CountryName };
