import React, { FC } from "react";
import { IProduct } from "./types/types";
import Image from "./UI/Image/Image";
import "./styles/CartProductItem.css";
import Button from "./UI/Button/Button";
import { deleteById } from "../api/helpers/cartProducts";

interface ProductItemProps {
  cartProduct: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ cartProduct }) => {

  const removeFromCart = (id: number) => {
    deleteById(id)
  }

  return (
    <div className="cart__product">
      <Image
        src={cartProduct.imgUrl}
        alt="cart product image"
        width={130}
        height={100}
        className="cart__product__img"
      />
      <br />
      {cartProduct.name} <br /> {cartProduct.price}$ <br />
      quantity: {cartProduct.quantity}
      <br />
      <Button onClick={() => removeFromCart(cartProduct.id)}>
        <div>Remove from Cart</div>
      </Button>
    </div>
  );
};

export default ProductItem;
