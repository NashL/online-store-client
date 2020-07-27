import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import { CURRENT_USER } from "../graphql/queries";
import { Link } from 'react-router-dom'

const LoginItem = (props) => {  
  console.log('cuRRent', props.currentUser)
  const currentUser = props.currentUser
  // const { loading, error, data } = useQuery(CURRENT_USER);

  if (!!currentUser)
    return  <Link className="navbar-item" to="/login">{currentUser.fullName}</Link>
  else
    return  <Link className="navbar-item" to="/login">Inicio de Sesion/Registrarse</Link>;
  // if (error) return     <Link className="navbar-item" to="/login">Inicio de Sesion/Registrarse</Link>;
  // if (data === undefined) return <Link className="navbar-item" to="/login">Inicio de Sesion/Registrarse</Link>;
  // return (
  // )
}

export default LoginItem