import React, { FC } from "react";
import { useProducts } from "../components/hooks/useProducts";
import List from "../components/List";
import ProductItem from "../components/ProductItem";
import { IProduct } from "../components/types/types";
import './styles/Home.css'

interface HomeProps {
  products: IProduct[];
  searchQuery: string;
}

const Home: FC<HomeProps> = ({ products, searchQuery }) => {
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
