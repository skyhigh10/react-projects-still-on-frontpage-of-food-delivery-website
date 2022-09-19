import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
   import Frontpage from './Components/Userview/Fronpage/Frontpage';
   import Login from './Components/Userview/Log-Reg/Login';
   import Register from './Components/Userview/Log-Reg/Register';
import Partnership from './Components/Userview/Fronpage/Partnership/Partnership';

class App extends Component {
  render() {
    return (
      <Router>
     <Routes>
     <Route exact path='/'  element={<Frontpage />} />
     <Route path='/Login' element={<Login/>} />
     <Route path='/Register' element={<Register/>} />
     <Route path='/Partnership' element={<Partnership/>} />

     </Routes>
      </Router>
    );
  }
}

export default App;
