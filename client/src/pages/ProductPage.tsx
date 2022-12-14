import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";
import { IProduct } from "../components/types/types";
import Image from '../components/UI/Image/Image';
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
      <Image
        src={product?.imgUrl}
        alt="product image"
        width={350}
        height={350}
      />
      {product?.name}
      {product?.price}
      {product?.quantity}
    </div>
  );
};

export default ProductPage;
