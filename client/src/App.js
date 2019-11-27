import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import BottomNavbar from "./components/layout/BottomNavbar";

import User from "./components/pages/User";
import Login from "./components/auth/Login";

import Fitness from "./components/pages/Fitness";
import Progress from "./components/pages/Progress";

import "./App.css";
import { IntlProvider } from "react-intl";

function onAuthRequired({ history }) {
  history.push("/login");
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Security
            issuer="https://dev-998376.okta.com/oauth2/default"
            client_id="0oa1qbdvqjMycXJKF357"
            redirect_uri={window.location.origin + "/implicit/callback"}
            onAuthRequired={onAuthRequired}
          >
            <div style={style} className="App">
              <Navbar />
              <IntlProvider>

                <SecureRoute path="/user" exact={true} component={User} />

                <SecureRoute path="/" exact={true} component={Fitness} />
                <SecureRoute
                  path="/progress"
                  exact={true}
                  component={Progress}
                />
              </IntlProvider>
              <Route
                path="/login"
                render={() => <Login baseUrl="https://dev-998376.okta.com" />}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />

              <BottomNavbar />
            </div>
          </Security>
        </Router>
      </Provider>
    );
  }
}

const style = {};
export default App;
