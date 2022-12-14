import { Grid, ListItem } from '@mui/material';
import './App.css';
import Button from './button/button';

function App() {
  return (
      <div className='container'>
        <div className='sub_container'>
          <div className='screen_calculator'>
            <p></p>
          </div>
          <div>
            <Button title="AC" color="#c8d1dc" />
            <Button title="( )" color="#c8d1dc" />
            <Button title="%" color="#c8d1dc" />
            <Button title="/" color="#ea930f" colorText="white"/>
          </div>
          <div>
            <Button title="7" color="#393d41" />
            <Button title="8" color="#393d41" />
            <Button title="9" color="#393d41" />
            <Button title="X" color="#ea930f" colorText="white"/>
          </div>
        </div>
      </div>
  );
}

export default App;
