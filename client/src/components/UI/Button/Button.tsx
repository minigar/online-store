import React, { FC } from "react";
import "./Button.css";

interface ButtonProps {
  children?: React.ReactNode[] | React.ReactNode;
  onClick?: (event: any) => void;
  style?: React.CSSProperties
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={"button"}>
      {children}
    </button>
  );
};

export default Button;
