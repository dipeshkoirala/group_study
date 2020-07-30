import React, { Component } from "react";
import { MoviesDataStore } from "./dataF/DataStore";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { RentConnector } from "./Rent/RentConnector";
import "./App.css";

export default class App extends Component() {
  render() {
    return (
      <Provider store={MoviesDataStore}>
        <Router>
          <Switch>
            <Route path="/rent" component={RentConnector} />
            <Redirect to="/rent" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
