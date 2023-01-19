import { Button } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";
import { IProduct } from "../components/types/types";
import Image from "../components/UI/Image/Image";
import "./styles/ProductPage.css";

interface ProductPageProps {
  addToCart: ({ id, name, price, quantity, imgUrl }: IProduct) => void;
}

const ProductPage: FC<ProductPageProps> = ({ addToCart }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProduct>();
  const [buyButton, setBuyButton] = useState<string>('buy');
  const [buyLink, setBuyLink] = useState<string>('');

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
      <div style={{ width: "max-content" }}>
        <div style={{ fontSize: "36px", position: "relative", left: "280px" }}>
          {product?.name}
        </div>
      </div>
      <br />
      <br />
      <div className="product__page__tabs__list"></div>
      <Image
        className="product__page__image"
        src={product?.imgUrl}
        alt="product image"
        width={500}
        height={500}
      />
      <div className="product__page__buy">
        <span className="product__page__buy__price">{product?.price}</span>
        <Button
          onClick={() => {
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1,
              imgUrl: product.imgUrl,
            });
            setBuyButton("✔Done")
            navigate(buyLink)
            setBuyLink('/cart')
          }}
          style={{ marginLeft: "10px" }}
        >
          <span style={{fontSize: '12px'}}>{buyButton}</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductPage;
