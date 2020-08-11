import React, { useState, useCallback, useEffect } from "react";
import Home from "./containers/Home";
import Auth from "./containers/Auth";
import NavBar from "./NavBar/NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import jwtDecode from "jwt-decode";
import { REFRESH_TOKEN } from "./graphql/mutations";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

library.add(fab, faSignInAlt, faUserPlus);

function App(props) {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch('https://gonline-store.rj.r.appspot.com/query', {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation {
              refreshToken {
                 token
                 expiredAt
              }
            }
        `
      })
    }).then(async (x) => {
      const {data} = await x.json();
      console.log("response", data.refreshToken.token);
      const jwtDecoded = jwtDecode(data.refreshToken.token);
      sessionHandler(jwtDecoded)
      // setLoading(false);
    });
  });

  const sessionHandler = useCallback(
    (currentUser) => {
      setAuthenticated(true);
      setCurrentUser(currentUser);
    },
    [setAuthenticated]
  );

  // const logoutHandler = useCallback(() => {
  //   setAuthenticated(false);
  //   setCurrentUser(null);
  // }, [setAuthenticated]);

  return (
    <Router>
      <div>
        <NavBar currentUser={currentUser} />
        <Switch>
          <Route path="/login">
            {/* {mutationLoading && <p>Loading...</p>}
          {mutationError && <p>Error :( Please try again</p>} */}
            Authenticated: {authenticated ? "True" : "False"}
            <Auth sessionHandler={sessionHandler} />
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
