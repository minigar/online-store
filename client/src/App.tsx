import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { IProduct } from "./components/types/types";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { api } from "./api";
import AdminPanel from "./pages/AdminPanel";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  const addToCart = async ({ id, name, price, quantity, imgUrl }: IProduct) => {
    return await api.cartProducts.create({
      name,
      price,
      quantity,
      imgUrl,
    });
  };

  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Home
          searchQuery={searchQuery}
          products={products}
          setProducts={setProducts}
          addToCart={({ id, name, price, quantity, imgUrl }: IProduct) =>
            addToCart({ id, name, price, quantity, imgUrl })
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
    {
      path: "/admin-panel",
      element: <AdminPanel />,
    },
    {
      path: `/products/:id`,
      element: <ProductPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div className="App">
      <Header
        products={products}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <br />
      <hr />
      <br />
      {routes}
    </div>
  );
}

export default App;
