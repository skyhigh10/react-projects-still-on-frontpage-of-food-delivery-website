import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Front from './UserView/Front-page/Front/Front';
import Login from './UserView/Front-page/Log-Reg/Login';
import Register from './UserView/Front-page/Log-Reg/Register';
import Navbar from './UserView/Front-page/Front/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
    <Routes>
        <Route exact path='/'  element={<Front />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
    </Routes>
    </Router>
    );
  }
}

export default App;
