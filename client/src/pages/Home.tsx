import React, { FC, useEffect, useState } from "react";
import { useProducts } from "../components/hooks/useProducts";
import List from "../components/List";
import ProductItem from "../components/ProductItem";
import { IProduct } from "../components/types/types";
import "./styles/Home.css";
import { api } from "../api";

interface HomeProps {
  searchQuery: string;
}

const Home: FC<HomeProps> = ({ searchQuery }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts();
  }, [products]);

  async function getProducts() {
    const res = await api.products.list();
    setProducts(res.data);
  }

  const searchedProducts = useProducts(products, searchQuery);
  return (
    <div>
      {searchedProducts.length ? (
        <List
          items={searchedProducts}
          renderItem={(product: IProduct) => (
            <ProductItem product={product} key={product.id} />
          )}
        />
      ) : (
        <h2 id="products-empty">Have no products yet</h2>
      )}
    </div>
  );
};

export default Home;
