import React, { useState } from "react";
import "./styles/Cart.css";
import List from "../components/List";
import ProductItem from "../components/ProductItem";
import { IProduct } from "../components/types/types";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState<IProduct[]>([

  ]);
  return (
    <div className="cart">
      <h2 className="cart-title" >Your Shopping Cart</h2>
      <div className="cart-products">
        {cartProducts.length ? (<List
          items={cartProducts}
          renderItem={(product: IProduct) => (
            <ProductItem product={product} key={product.id} />
          )}
        />)
      : (
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
