import React, { Component } from "react";
import NavBar from "../components/NavBar";
import SlideShow from "../components/SlideShow";

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
          <div className="slider-content">
            <SlideShow />
          </div>
          <button onClick={this.signInHandler}> INGRESAR</button>
          <button onClick={this.signUpHandler}> REGISTRARSE</button>
        </div>
      </div>
    );
  }
}

export default Home;
