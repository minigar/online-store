import React, { FC, useEffect } from "react";
import { useProducts } from "../components/hooks/useProducts";
import List from "../components/List";
import ProductItem from "../components/ProductItem";
import { IProduct } from "../components/types/types";
import "./styles/Home.css";
import { api } from "../api";
import menu from "./categories.json";

interface HomeProps {
  searchQuery: string;
  products: IProduct[];
  setProducts: (value: IProduct[]) => void;
}

const Home: FC<HomeProps> = ({ searchQuery, products, setProducts }) => {
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
      <div style={{ width: "300px" }}>
        <List
          className="home__menu__categories__list"
          items={menu}
          renderItem={(category) => (
            <div key={category.name} className="home__menu__categories__list__item">
              <a href={category.link}>{category.name}</a> <br />
            </div>
          )}
        ></List>
      </div>

      <div className="home__Ad">ТУТ МОГЛА БУТИ ВАША РЕКЛАМА!</div>

      {searchedProducts.length ? (
        <div className="products__wraper">
          <List
            className="product__item__list"
            items={searchedProducts}
            renderItem={(product: IProduct) => (
              <ProductItem product={product} key={product.id} />
            )}
          />
        </div>
      ) : (
        <h2 className="home__empty products__wraper">Products not found!</h2>
      )}
    </div>
  );
};

export default Home;
