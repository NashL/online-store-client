import React, { Component } from "react";
import NavBar from "../components/NavBar";

class Home extends Component {
  state = {};

  signInHandler() {
    console.log("signing in...");
  }

  signUpHandler() {
    console.log("signing up...");
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container main-container">
        <h1 className="title">Bienvenidos a tu Tienda Online</h1>
        <button onClick={this.signInHandler}> INGRESAR</button>
        <button onClick={this.signUpHandler}> REGISTRARSE</button>
        </div>

      </div>
    );
  }
}

export default Home;
