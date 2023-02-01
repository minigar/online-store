import { Button, TextField } from "@mui/material";
import React from "react";
import "./styles/Login.css";

const Login = () => {
  return (
    <div className="login_form__wrapper">
      <form className="login_form">
        <div className="login_form__text__wrapper">
          <span className="login_form__text">Log In</span>
        </div>
        <br />
        <TextField
          size="small"
          label="Email"
          className="login_form__input"
          placeholder="Email"
          variant="outlined"
        />
        <br /> <br /> <br />
        <TextField
          size="small"
          label="Password"
          className="login_form__input"
          placeholder="Password"
          variant="outlined"
          type="password"
        />
        <br /> <br /> <br />
        <Button className="login_button" variant="outlined" color="success">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default Login;
