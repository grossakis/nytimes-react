import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <SearchPage/>
    );
  }
}

export default App;
