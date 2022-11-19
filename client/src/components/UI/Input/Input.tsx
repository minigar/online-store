import React, { FC } from "react";
import "./Input.css";

interface InputProps {
  props?: any,
  placeholder?: string
  id?: string;
  value?: any;
  onChange?: (event: any) => void
};

const Input: FC<InputProps> = ({...props} ) => {
  return <input className="input" {...props} />;
};

export default Input;
