import React, { FC } from "react";
import { IProduct } from "./types/types";
import Button from "./UI/Button/Button";

interface QuantityButtonsProps {
  quantity: number;
  mapAddtoCartButton: () => void;
  removeQuantity: () => void;
  addQuantity: () => void;
  product: IProduct;
  addToCart: ({ id, name, price, quantity, imgUrl }: IProduct) => void;
}

const QuantityButtons: FC<QuantityButtonsProps> = ({
  quantity,
  mapAddtoCartButton,
  removeQuantity,
  addQuantity,
  product,
  addToCart,
}) => {
  return (
    <div className="quantity__buttons">
      <Button onClick={mapAddtoCartButton}>X</Button>
      <Button onClick={removeQuantity}>-</Button>
      {quantity}
      <Button onClick={addQuantity}>+</Button>
      <Button
        onClick={() => {
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              quantity,
              imgUrl: product.imgUrl,
            })
            mapAddtoCartButton()
          }
        }
      >
        Add
      </Button>
    </div>
  );
};

export default QuantityButtons;
