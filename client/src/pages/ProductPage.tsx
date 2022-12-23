import { Button } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";
import { IProduct } from "../components/types/types";
import Image from "../components/UI/Image/Image";
import "./styles/ProductPage.css";
interface ProductPageProps {}

const ProductPage: FC<ProductPageProps> = () => {
  const [product, setProduct] = useState<IProduct>();

  async function getProductById(id: number) {
    const res = await api.products.getById(id);
    setProduct(res.data);
  }

  let { id } = useParams();

  useEffect(() => {
    getProductById(Number(id));
  });

  return (
    <div className="product__page">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="product__page__tabs__list">
        <ul className="product__page__tabs__list__ul">
          <a className="product__page__tabs__list__a" href=".">
            All about
          </a>
          <a className="product__page__tabs__list__a" href=".">
            Characteristics
          </a>
          <a className="product__page__tabs__list__a" href=".">
            Response
          </a>
          <a className="product__page__tabs__list__a" href=".">
            Questions
          </a>
          <a className="product__page__tabs__list__a" href=".">
            Photos
          </a>
        </ul>
      </div>
      <Image
        className="product__page__image"
        src={product?.imgUrl}
        alt="product image"
        width={500}
        height={500}
      />
      <div className="product__page__buy">
        <span className="product__page__buy__price">{product?.price}</span>
        <Button style={{ marginLeft: "10px" }}>Buy</Button>
      </div>
      <div> {product?.name}</div>
      <div>{product?.quantity}</div>
    </div>
  );
};

export default ProductPage;
