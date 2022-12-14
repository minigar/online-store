import React, { FC } from "react";
import "./Button.css";

interface ButtonProps {
  children?: React.ReactNode[] | React.ReactNode;
  onClick?: (event: any) => void;
  style?: React.CSSProperties;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={"default" || "primary" || "secondary" || "accent" || "disable"}
    >
      {children}
    </button>
  );
};

export default Button;
