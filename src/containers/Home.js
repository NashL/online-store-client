import React, { Component } from "react";
import NavBar from '../components/NavBar';

class  Home extends Component {
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
        <NavBar/>
        <section className="section">
          <div className="container">
            <h1 className="title">Section</h1>
            <h2 className="subtitle">
              A simple container to divide your page into{" "}
              <strong>sections</strong>, like the one you're currently reading
            </h2>
          </div>
        </section>
        <h1 className="title">Bienvenidos a tu Tienda Online</h1>
        <button onClick={this.signInHandler}> INGRESAR</button>
        <button onClick={this.signUpHandler}> REGISTRARSE</button>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="Oscar"
                />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                  <small>31m</small>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean efficitur sit amet massa fringilla egestas. Nullam
                  condimentum luctus turpis.
                </p>
              </div>
              <nav className="level is-mobile">
                <div className="level-left">
                  <a className="level-item" aria-label="reply" href="#">
                    <span className="icon is-small">
                      <i className="fas fa-reply" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a className="level-item" aria-label="retweet" href="#">
                    <span className="icon is-small">
                      <i className="fas fa-retweet" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a className="level-item" aria-label="like" href="#">
                    <span className="icon is-small">
                      <i className="fas fa-heart" aria-hidden="true"></i>
                    </span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Home;
