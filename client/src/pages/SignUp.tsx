import React, { useEffect, useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import "./styles/SignUp.css";
import { api } from "../api";
import { UserBodyModel } from "../api/helpers/user";

const SignUp = () => {
  const errRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const createUser = async ({ name, email, password }: UserBodyModel) => {
    return await api.users.create(name, email, password);
  };

  useEffect(() => {
    setErrMessage("");
  }, [name, password, email]);

  return (
    <div className="signup__wrapper">
      <p
        ref={errRef}
        className={errMessage ? "errmsg" : "offscreen"}
        aria-live="assertive"
      ></p>
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
          onChange={(e) => setName(e.target.value)}
          value={name}
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
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <br />
        <br />
        <br />
        <Button
          className="singup__form__button"
          color="success"
          variant="outlined"
          onClick={() => {
            if (password === confirmPassword) {
              return createUser({ name, email, password });
            }
          }}
        >
          Sign Up
        </Button>
        <br />
        <br />
        <p style={{ color: "white" }}>
          already have accout?
          <span>
            <a href="login">Login</a>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
