import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { useProducts } from "./components/hooks/useProducts";
import List from "./components/List";
import ProductItem from "./components/ProductItem";
import { IProduct } from "./components/types/types";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const searchedProducts = useProducts(products, searchQuery);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const res = await axios.get<IProduct[]>("http://localhost:3001/products");
    setProducts(res.data);
  }

  return (
    <div className="App">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <br />
      <hr />
      <br />
      <List
        items={searchedProducts}
        renderItem={(product: IProduct) => (
          <ProductItem product={product} key={product.id} />
        )}
      />
    </div>
  );
}

export default App;
