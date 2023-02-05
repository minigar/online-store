import { Button, TextField } from "@mui/material";
import { useState } from "react";
import "./styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  return (
    <div className="login_form__wrapper">
      <p>{errMessage}</p>
      <form action="post" className="login_form">
        <div className="login_form__text__wrapper">
          <span className="login_form__text">Log In</span>
        </div>
        <TextField
          color="warning"
          size="small"
          label="Email"
          className="login_form__input"
          placeholder="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <br />
        <br />
        <TextField
          color="warning"
          size="small"
          label="Password"
          className="login_form__input"
          placeholder="Password"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <br />
        <br />
        <Button className="login_button" variant="outlined" color="success">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default Login;
