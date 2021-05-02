import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import React from "react";
import "./login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://external-content.duckduckgo.com/iu/
          ?u=http%3A%2F%2Fdiscordapp.com%2Fassets%2Ffc0b01fe10a0b8c602fb0106d8189d9b.png&f=1&nofb=1"
          alt="discord logo"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
