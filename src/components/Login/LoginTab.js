import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
  return (
    <div className="tabs is-centered is-boxed">
      <ul>
        <li className="is-active">
          <a>
            <span className="icon is-small">
              <FontAwesomeIcon icon="sign-in-alt" />
            </span>
            <span>Inicia Sesion</span>
          </a>
        </li>
        <li>
          <a>
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
