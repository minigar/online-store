import { Button } from "@mui/material";
import React, { FC } from "react";

interface QuantityButtonsProps {
  quantity: number;
  removeQuantity: () => void;
  addQuantity: () => void;
  style?: React.CSSProperties;
  className?: string;
}

const QuantityButtons: FC<QuantityButtonsProps> = ({
  removeQuantity,
  addQuantity,
  quantity,
  style,
  className,
}) => {
  return (
    <div className={className}>
      <Button style={style} onClick={removeQuantity}>
        -
      </Button>
      {quantity}
      <Button style={style} onClick={addQuantity}>
        +
      </Button>
    </div>
  );
};

export default QuantityButtons;
