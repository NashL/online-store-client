import React from "react";
import { useForm } from "react-hook-form";

export default (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const displayStyle = props.showLoginForm
    ? { display: "none" }
    : { display: "block" };
  return (
    <div className="container box" style={displayStyle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label" htmlFor="name">
            Nombres
          </label>
          <div className="control">
            <input
              className="input"
              name="name"
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
          {errors.name && (
            <p className="help is-danger has-text-left">
              {errors.name.message}
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
  // }
};
