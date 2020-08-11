import React, { Component, useState } from "react";
import AuthContainer from "../components/Login/AuthContainer";

function Auth(props) {
  const [showLoginForm, setShowLoginForm] = useState(true);

  return (
    <section className="section">
      <AuthContainer
        sessionHandler={props.sessionHandler}
        showLoginForm={showLoginForm}
        handleLoginTab={setShowLoginForm}
      />
    </section>
  );
}

export default Auth;
