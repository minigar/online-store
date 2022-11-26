import React, { FC } from "react";
import { IProduct } from "./types/types";
import Image from "./UI/Image/Image";
import "./styles/ProductItem.css";
import Button from "./UI/Button/Button";

interface ProductItemProps {
  product: IProduct;
  addToCart: ({ id, name, price, quantity, imgUrl }: IProduct) => void;
}

const ProductItem: FC<ProductItemProps> = ({ product, addToCart }) => {
  return (
    <div className="product">
      <Image
        src={product.imgUrl}
        alt="black square"
        width={130}
        height={100}
        className="productImg"
      />
      <br />
      {product.name} <br /> {product.price}$ <br />
      quantity: {product.quantity}
      <br />
      <Button
        onClick={() => {
          addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity || 1,
            imgUrl: product.imgUrl,
          });
        }}
      >
        <div>Add to Cart</div>
      </Button>
    </div>
  );
};

export default ProductItem;
