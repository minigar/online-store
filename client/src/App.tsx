import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { IProduct } from "./components/types/types";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);

  const routes = useRoutes([
    {
      path: "/",
      element: <Home searchQuery={searchQuery} />,
    },
    {
      path: "/cart",
      element: <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />,
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
