import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello, Our team will create best travel application ever!</h1>
      <Button variant="contained">material UI button</Button>
    </div>
  );
};

export default hot(App);
