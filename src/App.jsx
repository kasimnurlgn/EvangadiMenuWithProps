import React, { Component } from "react";
import "./assets/style.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
class App extends Component {
  render() {
    return (
      <div className="all-container">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
