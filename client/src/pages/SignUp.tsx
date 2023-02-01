import React from "react";
import { Button, TextField } from "@mui/material";
import "./styles/SignUp.css";

const SignUp = () => {
  return (
    <div className="signup__wrapper">
      <form action="post" className="signup__form">
        <br />
        <br />
        <div className="signup__text__wrapper">
          <span className="signup_form__text">Sign Up</span>
          <br />
          <br />
        </div>
        <TextField
          color="warning"
          label="Username"
          variant="outlined"
          placeholder="Username"
          type="text"
          size="small"
          className="signup__form__input"
        />
        <br />
        <br />
        <br />
        <TextField
          color="warning"
          label="Email"
          variant="outlined"
          placeholder="Email"
          type="email"
          size="small"
          className="signup__form__input"
        />
        <br />
        <br />
        <br />
        <TextField
          color="warning"
          label="Password"
          variant="outlined"
          placeholder="Password"
          type="password"
          size="small"
          className="signup__form__input"
        />
        <br />
        <br />
        <br />
        <TextField
          color="warning"
          label="Confirm Password"
          variant="outlined"
          placeholder="Confirm Password"
          type="password"
          size="small"
          className="signup__form__input"
        />
        <br />
        <br />
        <br />
        <Button
          className="singup__form__button"
          color="success"
          variant="outlined"
        >
          Sign Up
        </Button>
        <br />
        <br />
      </form>
    </div>
  );
};

export default SignUp;
