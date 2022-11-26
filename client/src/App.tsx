import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { IProduct } from "./components/types/types";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { create } from "./api/requests/cartProducts";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  const addToCart = ({ id, name, price, imgUrl }: IProduct) => {
    create({ id, name, price, imgUrl });
  };

  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Home
          searchQuery={searchQuery}
          products={products}
          setProducts={setProducts}
          addToCart={({id, name, price, imgUrl}: IProduct) =>
            addToCart({ id, name, price, imgUrl })
          }
        />
      ),
    },
    {
      path: "/cart",
      element: (
        <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
      ),
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
