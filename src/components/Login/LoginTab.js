import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ showLoginForm, handleLoginTab }) => {
  return (
    <div className="tabs is-centered is-boxed">
      <ul>
        <li className={ showLoginForm ? 'is-active' : ''}>
          <a onClick={() => handleLoginTab(true)}>
            <span className="icon is-small">
              <FontAwesomeIcon icon="sign-in-alt" />
            </span>
            <span>Inicia Sesion</span>
          </a>
        </li>
        <li className={ showLoginForm ? '' : 'is-active'}>
          <a onClick={() => handleLoginTab(false)}>
            <span className="icon is-small">
              <FontAwesomeIcon icon="user-plus" />
            </span>
            <span>Registrate</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
