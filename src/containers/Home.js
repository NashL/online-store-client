import React, { Component } from "react";
import NavBar from "../components/NavBar";
import SlideShow from "../components/SlideShow";
import MultipleSlidesShow from "../components/MultipleSlidesShow";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div className="container main-container">
        <SlideShow />
        <MultipleSlidesShow/>
        </div>
      </div>
    );
  }
}

export default Home;
