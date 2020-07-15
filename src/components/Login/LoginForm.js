import React from "react";
import { useForm } from "react-hook-form";
import { LOGIN } from '../../graphql/mutations'
import { useMutation } from '@apollo/react-hooks';

export default (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [login] = useMutation(LOGIN)

  const onSubmit = (data) => {
    console.log(data);
    login({ variables: data}).then( response => 
      console.log('loginResponse', response )
    ).catch(error => {
      console.error('loginError', error)
    })
  };

  const displayStyle = props.showLoginForm
    ? { display: "block" }
    : { display: "none" };
  return (
    <div className="container box" style={displayStyle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label" htmlFor="email">
            Correo Electronico
          </label>
          <div className="control">
            <input
              className="input"
              name="email"
              type="email"
              placeholder="Correo Electronico"
              ref={register({
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Ingresa un correo valido",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="help is-danger has-text-left">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="field">
          <label className="label" htmlFor="password">
            Contraseña
          </label>
          <div className="control">
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Contraseña"
              ref={register({
                required: "Este campo es obligatorio",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 letras",
                },
              })}
            />
          </div>
          {errors.password && (
            <p className="help is-danger has-text-left">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="field">
          <div className="control buttons is-centered">
            <input
              className="button is-medium is-danger is-fullwidth"
              type="submit"
              value="Ingresar"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
