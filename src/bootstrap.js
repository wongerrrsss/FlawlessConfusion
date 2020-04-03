import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore));

import "./style/main.scss";

import history from "./history";

import HomePage from "./components/pages/homepage";
import SignIn from "./components/auth/signin"
import SignUp from "./components/auth/signup"
import Account from "./components/account/account";
import Clothing from "./components/pages/clothing"

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/signin' exact component={SignIn} />
            <Route path='/signup' exact component={SignUp} />
            <Route path='/account' exact component={Account} />
            <Route path='/clothing' exact component={Clothing} />
          </Switch>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
