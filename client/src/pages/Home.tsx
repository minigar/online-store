import React, { FC, useEffect } from "react";
import { useProducts } from "../components/hooks/useProducts";
import List from "../components/List";
import ProductItem from "../components/ProductItem";
import { IProduct } from "../components/types/types";
import "./styles/Home.css";
import { api } from "../api";

interface HomeProps {
  searchQuery: string;
  products: IProduct[];
  setProducts: (value: IProduct[]) => void;
  addToCart: ({ id, name, price, quantity, imgUrl }: IProduct) => void;
}

const Home: FC<HomeProps> = ({
  searchQuery,
  products,
  setProducts,
  addToCart,
}) => {
  async function getProducts() {
    const res = await api.products.list();
    setProducts(res.data);
  }

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const searchedProducts = useProducts(products, searchQuery);
  return (
    <div className="home">
      {searchedProducts.length ? (
        <List
          items={searchedProducts}
          renderItem={(product: IProduct) => (
            <ProductItem
              addToCart={({ id, name, price, quantity, imgUrl }: IProduct) =>
                addToCart({ id, name, price, quantity, imgUrl })
              }
              product={product}
              key={product.id}
            />
          )}
        />
      ) : (
        <h2 className="home__empty">Products not found!</h2>
      )}
    </div>
  );
};

export default Home;
