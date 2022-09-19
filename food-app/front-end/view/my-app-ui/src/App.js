import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Front from './Components/Front-page/front';
import ".././node_modules/bootstrap/dist/css/bootstrap.min.css"
import Loginuser from './Components/Log-Reg/Login/Loginuser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Front/>
        <Loginuser/>
      </div>
    );
  }
}

export default App;
