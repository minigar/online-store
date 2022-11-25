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
  addToCart: ({ id, name, price, imgUrl }: IProduct) => void;
}

const Home: FC<HomeProps> = ({
  searchQuery,
  products,
  setProducts,
  addToCart,
}) => {
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <ProductItem
              addToCart={() =>
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  imgUrl: product.imgUrl,
                })
              }
              product={product}
              key={product.id}
            />
          )}
        />
      ) : (
        <h2 id="products-empty">Have no products yet</h2>
      )}
    </div>
  );
};

export default Home;
