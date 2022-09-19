import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Board from "./Components/board/Board";
import Foot from "./Components/footer/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <div>
          <Hero />
          <Board />

        </div>
      </div>
    );
  }
}

export default App;
