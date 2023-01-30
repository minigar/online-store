import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { IProduct } from "./components/types/types";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
// import { api } from "./api";
import AdminPanel from "./pages/AdminPanel";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";

function App() {
  const cartProductsFromLocalStorage = JSON.parse(
    localStorage.getItem("cartProducts") || "[]"
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [cartProducts, setCartProducts] = useState<IProduct[]>(
    cartProductsFromLocalStorage
  );

  const [products, setProducts] = useState<IProduct[]>([]);

  const addToCart = async ({ id, name, price, imgUrl }: IProduct) => {
    const index = cartProductsFromLocalStorage.findIndex(
      (cartProductFromLocalStorage: IProduct) =>
        cartProductFromLocalStorage.id === id
    );

    if (index === -1) {
      return localStorage.setItem(
        "cartProducts",
        JSON.stringify([
          ...cartProducts,
          {
            id,
            name,
            price,
            imgUrl,
          },
        ])
      );
    }

    return false;
  };

  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Home
          searchQuery={searchQuery}
          products={products}
          setProducts={setProducts}
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
      element: (
        <ProductPage
          addToCart={({ id, name, price, imgUrl }: IProduct) =>
            addToCart({ id, name, price, imgUrl })
          }
        />
      ),
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
