import { Button, TextField } from "@mui/material";
import { useState } from "react";
import "./styles/Login.css";
import { api } from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errMessage, setErrMessage] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (email: string, password: string) => {
    return (await api.auth.login(email, password)).data;
  };

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
          type="email"
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
        <Button
          className="login_button"
          variant="outlined"
          color="success"
          onClick={async () => {
            await onSubmit(email, password);
            navigate("/");
          }}
        >
          Log In
        </Button>
        <div
          style={{
            color: "white",
            position: "relative",
            top: "50px",
            left: "110px",
          }}
        >
          don't have account? <a href="/sign-up">create</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
