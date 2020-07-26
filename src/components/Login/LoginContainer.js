import React from "react";
import LoginForm from "./LoginForm";
import LoginTab from "./LoginTab";
import LoginButtons from "./LoginButtons";
import SignUpForm from "./SignUpForm";

export default ({onLoginHandler, showLoginForm, loginWithExternalAPI, handleLoginTab}) => {
  console.log('--onLoginHandler', onLoginHandler)
  return (
    <div className="has-text-centered container" style={{ maxWidth: "300px" }}>
      <LoginTab showLoginForm={showLoginForm} handleLoginTab={handleLoginTab} />
      <LoginForm onLoginHandler={onLoginHandler} showLoginForm={showLoginForm} />
      <SignUpForm showLoginForm={showLoginForm} />
      <hr />
      <span style={{ verticalAlign: "middle", padding: "0 10px" }}>O</span>
      <hr />
      <LoginButtons onClick={loginWithExternalAPI}/>
    </div>
  );
};
