import React from 'react'
import LoginButton from './LoginButton'

class LoginForm extends React.Component {

  state = {
    email: null,
    password: null
  }

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value })

  handleSubmit = () => this.props.handleSubmit(this.state)

  render() {
    return (
      <div className="container box">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit();
          }}>
          <div className="field">
            <label className="label" htmlFor="email">Correo Electronico</label>
            <div className="control">
              <input className="input" name="email" type="email" placeholder="Correo Electronico" required onChange={this.handleChange} />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="password">Contraseña</label>
            <div className="control">
              <input className="input" name="password" type="password" placeholder="Contraseña" required onChange={this.handleChange}/>
            </div>
          </div>

          <div className="field">
            <div className="control buttons is-centered">
              <input className="button is-medium is-danger is-fullwidth" type="submit" value="Ingresar" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm