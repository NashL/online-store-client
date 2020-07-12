import React from "react";
import LoginButton from './LoginButton'

export default ({onClick}) => {
  return (
    <div className="field">
      <LoginButton
        icon="google"
        name="Google"
        onClick={onClick}
      />
      <LoginButton
        icon="facebook-f"
        name="Facebook"
        onClick={onClick}
      />
    </div>
  );
};
