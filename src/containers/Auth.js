import React, { Component } from "react";
import LoginContainer from "../components/Login/LoginContainer";

class Auth extends Component {
  state = {
    authenticated: false,
    showLoginForm: true,
  };

  loginWithEmailAndPassword = () => {
    this.setState({ authenticated: true });
  };

  handleLoginTab = (newValue) => {
    this.setState({ showLoginForm: newValue });
  };

  loginWithExternalAPI = () => {
    console.log(' Login with Facebbok | google ')
  }

  render() {
    return (
      <section className="section">
        <LoginContainer
          showLoginForm={this.state.showLoginForm}
          loginWithExternalAPI={this.loginWithExternalAPI}
          handleLoginTab={this.handleLoginTab}
        />
      </section>
    );
  }
}

export default Auth;
