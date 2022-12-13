import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";
import { IProduct } from "../components/types/types";
interface ProductPageProps {}

const ProductPage: FC<ProductPageProps> = () => {
  const [product, setProduct] = useState<IProduct>();

  async function getProductById(id: number) {
    const res = await api.products.getById(id);
    setProduct(res.data);
    console.log(res.data);
  }

  let { id } = useParams();

  useEffect(() => {
    getProductById(Number(id));
  });

  return (
    <div className="product__page">
      {product?.id}
      {product?.name}
      {product?.price}
      {product?.quantity}
    </div>
  );
};

export default ProductPage;
