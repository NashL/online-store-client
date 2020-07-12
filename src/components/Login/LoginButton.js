import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const loginButton = ({ icon, name, onClick }) => (
  <div className="field">
    <button className="button" onClick={onClick}>
      <span className="icon">
        <FontAwesomeIcon icon={['fab', icon]} />
      </span>
      <span>{`Ingresa con ${name}`}</span>
    </button>
  </div>
);

export default loginButton;
