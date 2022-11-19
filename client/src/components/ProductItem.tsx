import React, { FC } from "react";
import { IProduct } from "./types/types";
import Image from "./UI/Image/Image";
import "./styles/ProductItem.css";
import Button from "./UI/Button/Button";

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {

  const addToCart = () => {
    return console.log(1);
  }

  return (
    <div className="product">
      <Image
        src={product.imgUrl}
        alt="black square"
        width={130}
        height={100}
        className="productImg"
      />{" "}
      <br />
      {product.name} <br /> {product.price}$ <br />
      quantity: {product.quantity}
      <br />
      <Button onClick={addToCart}>
        <div>Add to Cart</div>
      </Button>
    </div>
  );
};

export default ProductItem;
