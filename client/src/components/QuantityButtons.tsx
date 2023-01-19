import React, { FC } from "react";
import { IProduct } from "./types/types";
import Button from "./UI/Button/Button";

interface QuantityButtonsProps {
  quantity: number;
  mapAddtoCartButton: () => void;
  removeQuantity: () => void;
  addQuantity: () => void;
  product: IProduct;
}

const QuantityButtons: FC<QuantityButtonsProps> = ({
  mapAddtoCartButton,
  removeQuantity,
  addQuantity,
  quantity,
}) => {
  return (
    <div className="quantity__buttons">
      <Button onClick={mapAddtoCartButton}>X</Button>
      <Button onClick={removeQuantity}>-</Button>
      {quantity}
      <Button onClick={addQuantity}>+</Button>
      <Button
      >
        Add
      </Button>
    </div>
  );
};

export default QuantityButtons;