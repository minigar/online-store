import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { IProduct } from "./components/types/types";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const res = await axios.get<IProduct[]>("http://localhost:3001/products");
    setProducts(res.data);
  }

  const routes = useRoutes([
    {
      path: "/",
      element: <Home products={products} searchQuery={searchQuery} />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);

  return (
    <div className="App">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <br />
      <hr />
      <br />
      {routes}
    </div>
  );
}

export default App;
