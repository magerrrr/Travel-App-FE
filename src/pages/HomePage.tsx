import * as React from 'react';
import Button from '@material-ui/core/Button';

export const HomePage: React.FC = () => {
  return (
    <>
      <h1>Home page</h1>
      <div>
        <h1>Hello, Our team will create best travel application ever!</h1>
        <Button variant="contained">material UI button</Button>
      </div>
    </>
  );
};
