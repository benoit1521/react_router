import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from "./Home";
import History from "./History";

import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/notre-histoire" activeClassName="Red">
            History
          </NavLink>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notre-histoire" component={History} />
          </Switch>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
