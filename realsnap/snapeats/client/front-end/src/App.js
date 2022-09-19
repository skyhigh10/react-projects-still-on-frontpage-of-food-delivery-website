import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Frontpage from './UserView/Pages/Frontpage/Frontpage';
import Navbar from "./UserView/Pages/Navbar/Navbar"
 import Footer from "./UserView/Pages/Footer/Footer"
 import Login from "./UserView/Pages/Log-Reg/Login"
 import Register from "./UserView/Pages/Log-Reg/Register"
class App extends Component {
  render() {
    return (
      <Router>
    <Routes>
        <Route exact path='/'  element={< Frontpage/>} />
        <Route path='Navbar' element={<Navbar/>}/>
        <Route path='Footer' element={<Footer/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Register' element={<Register/>}/>


    </Routes>
    </Router>
    );
  }
}

export default App;
