import React, { FC, useState } from "react";
import { IProduct } from "./types/types";
import Image from "./UI/Image/Image";
import "./styles/CartProductItem.css";
// import { deleteById } from "../api/helpers/cartProducts";
import { Button } from "@mui/material";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import QuantityButtons from "./QuantityButtons";

interface ProductItemProps {
  cartProduct: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ cartProduct }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const price = cartProduct.price * quantity;

  const removeFromCart = (id: number) => {
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    const index = cartProducts.findIndex(
      (product: IProduct) => product.id === cartProduct.id
    );
    if (index !== -1) {
      cartProducts.splice(index, 1);
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    }
    // deleteById(id);
  };

  const addQuantity = () => setQuantity(quantity + 1);

  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="cart__product">
      <Image
        src={cartProduct.imgUrl}
        alt="cart product image"
        width={100}
        height={100}
        className="cart__product__img"
      />
      <div className="cart__product__name">{cartProduct.name}</div>
      <QuantityButtons
        className="quantity__buttons"
        style={{ fontSize: "24px" }}
        addQuantity={addQuantity}
        removeQuantity={removeQuantity}
        quantity={quantity}
      ></QuantityButtons>
      <div className="cart__product__price">{price}$</div>
      <Button
        className="delete__button"
        onClick={() => removeFromCart(cartProduct.id)}
        color="secondary"
        startIcon={<DeleteSharpIcon />}
      >
        Delete
      </Button>
      <div className="to__order">
        <span>{price}$ </span>
        <Button
          className="to__order__button"
          variant="outlined"
          color="success"
        >
          To Order
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
