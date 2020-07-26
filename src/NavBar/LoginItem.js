import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import { CURRENT_USER } from "../graphql/queries";
import { Link } from 'react-router-dom'

const LoginItem = (props) => {  
  console.log('curren', props.currentUser)
  const { loading, error, data } = useQuery(CURRENT_USER);

  if (loading) return   <Link className="navbar-item" to="/login">Inicio de Sesion/Registrarse</Link>;
  if (error) return     <Link className="navbar-item" to="/login">Inicio de Sesion/Registrarse</Link>;
  if (data === undefined) return <Link className="navbar-item" to="/login">Inicio de Sesion/Registrarse</Link>;
  return (
    <Link className="navbar-item" to="/login">{data.currentUser.fullName}</Link>
  )
}

export default LoginItem