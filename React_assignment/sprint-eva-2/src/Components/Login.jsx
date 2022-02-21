import React from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Login = (props) => {
  const { handleSignin } = React.useContext(AuthContext);
  return (
    <React.Fragment>
      <h1> This is the login page </h1>
      <button onClick={handleSignin}> Sign In </button>
    </React.Fragment>
  );
};