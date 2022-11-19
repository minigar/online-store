import React, { FC } from "react";
import { IProduct } from "./types/types";
import Image from "./UI/Image/Image";
import "./styles/ProductItem.css";
import Button from "./UI/Button/Button";

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="product">
      <Image
        src={require("../images/blackSquare.png")}
        alt="black square"
        width={130}
        height={100}
        maxWidth={'100%'}
        className="productImg"
      />{" "}
      <br />
      {product.name} <br /> {product.price}$ <br />
      quantity: {product.quantity}
      <br />
      <Button>
        <div>Add to Cart</div>
      </Button>
    </div>
  );
};

export default ProductItem;
