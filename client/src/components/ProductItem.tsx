import React, { FC } from "react";
import { IProduct } from "./types/types";
import Image from "./UI/Image/Image";
import "./styles/ProductItem.css";
// import Button from "./UI/Button/Button";
// import Modal from "./UI/Modal/Modal";
// import QuantityButtons from "./QuantityButtons";
import { useNavigate } from "react-router-dom";

interface ProductItemProps {
  product: IProduct
}

const ProductItem: FC<ProductItemProps> = ({product}) => {

  const navigate = useNavigate();

  const toProductPage = (id: number) => {
    navigate(`/products/${id}`);
  };


  return (
    <div className="product">
      <Image
        src={product.imgUrl}
        alt="product image"
        width={120}
        height={120}
        className="product__img"
        onClick={() => {
          toProductPage(product.id);
        }}
      />
      <br />
      <div id="product__details"
        onClick={() => {
          toProductPage(product.id);
        }}
      >
        {product.name}
      </div>
      <div className="product__price">{product.price}₴</div>
    </div>
  );
};

export default ProductItem;
