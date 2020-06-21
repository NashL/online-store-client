import React, { Component } from 'react'

class Home extends Component {
  state = {

  }

  signInHandler() {
    console.log('signing in...')
  }

  signUpHandler() {
    console.log('signing up...')
  }

  render(){
    return (
      <div>
        <h1 className="title">Bienvenidos a tu Tienda Online</h1>
        <button onClick={this.signInHandler}> INGRESAR</button>
        <button onClick={this.signUpHandler}> REGISTRARSE</button>
      </div>
    )
  }
}

export default Home