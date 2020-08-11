import React from "react";
import { useForm } from "react-hook-form";
import { SIGNUP } from "../../graphql/mutations";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import jwtDecode from "jwt-decode";

export default (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [signup] = useMutation(SIGNUP);
  const history = useHistory();

  const onSubmit = (data) => {
    signup({ variables: data })
      .then((response) => {
        console.log("data:", data)
        const jwtDecoded = jwtDecode(response.data.signup.token);
        console.log("jwtDecoded", jwtDecoded);
        toast.success(`Bienvenido ${jwtDecoded.fullName}!`);
        props.sessionHandler(jwtDecoded)
        console.log("signUpResponse", response);
        history.push("/");
      })
      .catch((error) => {
        console.log("data:", data)
        toast.error("Something went wrong!");
        console.error("signUpError", error);
      });
  };

  const displayStyle = props.showLoginForm
    ? { display: "none" }
    : { display: "block" };
  return (
    <div className="container box" style={displayStyle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label" htmlFor="fullName">
            Nombres
          </label>
          <div className="control">
            <input
              className="input"
              name="fullName"
              type="text"
              placeholder="Nombres"
              ref={register({
                required: "Este campo es obligatorio",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 letras",
                },
              })}
            />
          </div>
          {errors.fullName && (
            <p className="help is-danger has-text-left">
              {errors.fullName.message}
            </p>
          )}
        </div>

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
              value="Registrar"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
