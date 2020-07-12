import React, { Component } from "react";
import NavBar from "../components/NavBar";
import SlideShow from "../components/SlideShow";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div className="container main-container">
          {/* <div className="slider-content"> */}
        <SlideShow />
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Home;
