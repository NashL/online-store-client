  import React, { useState } from "react";
import LoginForm from "./LoginForm";
import LoginTab from "./LoginTab";
import LoginButtons from "./LoginButtons";
import SignUpForm from "./SignUpForm";

export default ({sessionHandler, showLoginForm, handleLoginTab}) => {
  const [foo, setFoo] = useState('foo')
  return (
    <div className="has-text-centered container" style={{ maxWidth: "300px" }}>
      FOO: {foo}
      <LoginTab showLoginForm={showLoginForm} handleLoginTab={handleLoginTab} />
      <LoginForm sessionHandler={sessionHandler} showLoginForm={showLoginForm} />
      <SignUpForm sessionHandler={sessionHandler} showLoginForm={showLoginForm} />
      <hr />
      <span style={{ verticalAlign: "middle", padding: "0 10px" }}>O</span>
      <hr />
      <LoginButtons onSetFoo={setFoo}/>
    </div>
  );
};
