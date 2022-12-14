import React, { FC, useEffect } from "react";
import "./styles/Cart.css";
import List from "../components/List";
import CartProductItem from "../components/CartProductItem";
import { IProduct } from "../components/types/types";
import { api } from "../api";

interface CartProps{
  setCartProducts: (value: IProduct[]) => void;
  cartProducts: IProduct[]
}

const Cart: FC<CartProps> = ({cartProducts, setCartProducts }) => {

  useEffect(() => {
    getCartProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProducts]);

  async function getCartProducts() {
    const res = await api.cartProducts.list();
    setCartProducts(res.data);
  }

  return (
    <div className="cart">
      <h2 className="cart__title">Your Shopping Cart</h2>
      <div className="cart__products">
        {cartProducts.length ? (
          <List
            items={cartProducts}
            renderItem={(cartProduct: IProduct) => (
              <CartProductItem cartProduct={cartProduct} key={cartProduct.id}/>
            )}
          />
        ) : (
          <div className="cart__empty">
            <h3>Your Shopping Cart is empty</h3>
            <h4>But you always can change it!</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
