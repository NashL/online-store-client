import React, { Component } from "react";
import LoginContainer from "../components/Login/LoginContainer";

class Auth extends Component {
  state = {
    showLoginForm: true,
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
          onLoginHandler={this.props.onLoginHandler}
          showLoginForm={this.state.showLoginForm}
          loginWithExternalAPI={this.loginWithExternalAPI}
          handleLoginTab={this.handleLoginTab}
        />
      </section>
    );
  }
}

export default Auth;
