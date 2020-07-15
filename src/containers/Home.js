import React, { Component } from "react";
import SlideShow from "../components/SlideShow";
import MultipleSlidesShow from "../components/MultipleSlidesShow";
import Exchange from '../components/Exchange'
class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="container main-container">
          {/* {users.map(user => console.log(user))} */}
          {/* <Exchange></Exchange> */}
          <SlideShow />
          <MultipleSlidesShow />
        </div>
      </div>
    );
  }
}

export default Home;
