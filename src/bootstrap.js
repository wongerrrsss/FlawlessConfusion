import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore));

import "./style/main.scss";

import history from "./history";

import Layout from "./components/layout";
import SignIn from "./components/auth/signin"
import SignUp from "./components/auth/signup"
import HomePage from "./components/homepage"
import Clothing from "./components/pages/clothing"
import Accessories from "./components/pages/accessories"
import Sale from "./components/pages/sale"

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/signin' exact component={SignIn} />
            <Route path='/signup' exact component={SignUp} />
            <Route path='/clothing' exact component={Clothing} />
            <Route path='/accessories' exact component={Accessories} />
            <Route path='/sale' exact component={Sale} />
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
