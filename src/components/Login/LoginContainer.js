import React from "react";
import LoginForm from "./LoginForm";
import LoginTab from "./LoginTab";
import LoginButtons from "./LoginButtons";
import SignUpForm from "./SignUpForm";

export default ({onClick}) => {
  return (
    <div className="has-text-centered container" style={{ maxWidth: "300px" }}>
      <LoginTab />
      <LoginForm />
      <SignUpForm />
      <hr />
      <span style={{ verticalAlign: "middle", padding: "0 10px" }}>O</span>
      <hr />
      <LoginButtons onClick={onClick}/>
    </div>
  );
};
