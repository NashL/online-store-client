import React from 'react';
import Home from './containers/Home'
import Auth from './containers/Auth'
import NavBar from "./components/NavBar";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

library.add(fab, faSignInAlt, faUserPlus)

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
