import React from "react";
import LoginButton from './LoginButton'

export default ({onClick, onSetFoo}) => {
  return (
    <div className="field">
      <LoginButton
        icon="google"
        name="Google"
        // onClick={onClick}
      />
      <LoginButton
        icon="facebook-f"
        name="Facebook"
        // onClick={onClick}
      />
      <button type="submit" onClick={() => onSetFoo('BAR')}> HOOK</button>
    </div>
  );
};
