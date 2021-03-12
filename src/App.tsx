import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';
import MapComponent from './components/map';

const App: React.FC = () => {
  const capitalPosition = { lat: 26.613209, lng: 55.674835 }
  const countryCode = 'blr';
  return (
    <div>
      <h1>Hello, Our team will create best travel application ever!</h1>
      <Button variant="contained">material UI button</Button>
      
    </div>
  );
};

export default hot(App);
