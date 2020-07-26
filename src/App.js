import React, { useState, Component } from "react";
import Home from "./containers/Home";
import Auth from "./containers/Auth";
import NavBar from "./NavBar/NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

library.add(fab, faSignInAlt, faUserPlus);

class App extends Component {
  state = {
    authenticated: false,
    showLoginForm: true,
    currentUser: null,
  };

  onLoginHandler(currentUser) {
    console.log('OnLoginHandler...')
    this.setState((prevState) => ({
      authenticated: true,
      showLoginForm: prevState.showLoginForm,
      currentUser: currentUser
    }));
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar currentUser={this.state.currentUser} />
          <Switch>
            <Route path="/login">
              <Auth onLoginHandler={(user) => this.onLoginHandler(user)} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
