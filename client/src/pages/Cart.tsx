import React, { FC, useEffect } from "react";
import "./styles/Cart.css";
import List from "../components/List";
import ProductItem from "../components/ProductItem";
import { IProduct } from "../components/types/types";
import { api } from "../api";

interface CartProps{
  setCartProducts: (value: IProduct[]) => void;
  cartProducts: IProduct[]
}

const Cart: FC<CartProps> = ({cartProducts, setCartProducts}) => {

  useEffect(() => {
    getCartProducts();
  }, []);

  async function getCartProducts() {
    const res = await api.cartProducts.list();
    setCartProducts(res.data);
  }

  return (
    <div className="cart">
      <h2 className="cart-title">Your Shopping Cart</h2>
      <div className="cart-products">
        {cartProducts.length ? (
          <List
            items={cartProducts}
            renderItem={(cartProduct: IProduct) => (
              <ProductItem product={cartProduct} key={cartProduct.id} />
            )}
          />
        ) : (
          <div className="cart-empty">
            <h3>Your Shopping Cart is empty</h3>
            <h4>But you always can change it!</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
