import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Todo from "./Todo";
import { BrowserRouter as Router } from "react-router-dom";
/* import * as serviceWorker from './serviceWorker'; */

// 1. installed bootstrap using npm install and imported
import "bootstrap/dist/css/bootstrap.css";
ReactDOM.render(
  <Router>
    <App />
    {/* <Todo /> */}
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
/* serviceWorker.unregister(); */
/*  */
