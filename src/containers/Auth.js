import React, { Component } from "react";
import LoginContainer from "../components/Login/LoginContainer";

class Auth extends Component {
  state = {
    authenticated: false,
  };

  loginWithEmailAndPassword = () => {
    this.setState({ authenticated: true });
  };


  handleClose = () => {
    this.setState({ authenticated: false });
  };

  render() {
    return (
      <section className="section">
        <LoginContainer handleSubmit={this.loginWithEmailAndPassword}  />
      </section>
    );
  }
}

export default Auth;
