import React, { FC } from "react";

interface LabelProps {
  htmlFor: string;
  children: any;
  style?: React.CSSProperties;
}

const Label: FC<LabelProps> = ({ htmlFor, children, style }) => {
  return <label htmlFor="" style={style}>{children}</label>;
};

export default Label;
