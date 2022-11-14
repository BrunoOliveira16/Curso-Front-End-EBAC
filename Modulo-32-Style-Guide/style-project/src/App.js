import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Button variant="contained">Hello World</Button>
      <Menu />
    </div>
  );
}

export default App;
