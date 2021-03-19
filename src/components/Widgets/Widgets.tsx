import * as React from 'react';
import Container from '@material-ui/core/Container';
import Weather from '../Weather';

const Widgets: React.FC = () => {
  return (
    <Container>
      <Weather />
    </Container>
  );
};

export default Widgets;
