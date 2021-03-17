import * as React from 'react';
import Weather from '../Weather';
import Container from '@material-ui/core/Container';

const Widgets: React.FC = () => {
  return (
    <Container>
      <Weather />
    </Container>
  );
};

export default Widgets;
