import React from 'react';
import './App.css';
import { Button } from 'reactstrap';


function App() {

  return (
    <div className="App">
      <div className="container">
        <h1>reactstrap</h1>
        <Button color="primary">primary</Button>
        <Button outline color="success" style={{marginLeft: '50px'}}>outline success</Button>
      </div>
    </div>
  );
}

export default App;
