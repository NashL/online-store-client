import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import { CURRENT_USER } from "../graphql/queries";
import { Link } from 'react-router-dom'

const LoginItem = (props) => {  
  const currentUser = props.currentUser

  if (!!currentUser){
    return  (
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          {currentUser.fullName}
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item" onClick={props.onLogoutHandler}>
            Cerrar Sesion
          </a>
        </div>
      </div>
    )
  }
  else
    return  <Link className="navbar-item" to="/login">Inicio de Sesion/Registrarse</Link>;
}

export default LoginItem