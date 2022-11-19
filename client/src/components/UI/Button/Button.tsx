import React, { FC } from "react";
import "./Button.css";

interface ButtonProps {
  children: JSX.Element;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={"button"}>
      {children}
    </button>
  );
};

export default Button;
