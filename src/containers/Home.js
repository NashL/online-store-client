import React, { Component } from "react";
import SlideShow from "../components/SlideShow";
import { useQuery } from "@apollo/react-hooks";
import MultipleSlidesShow from "../components/MultipleSlidesShow";
import { CURRENT_USER } from "../graphql/queries";
class Home extends Component {
  state = {};

  componentDidUpdate() {
    // alert('Home')
  
  }
  render() {
    // const { userData, loading, error } = useQuery(CURRENT_USER);
    // if (loading) return <p>Loading,..</p>;
    // if (error) return <p>ERROR: {error.message}</p>;
    // if (userData === undefined) return <p>ERROR</p>;

    return (
      <div>
        <div className="container main-container">
          <SlideShow />
          <MultipleSlidesShow />
        </div>
      </div>
    );
  }
}

export default Home;
