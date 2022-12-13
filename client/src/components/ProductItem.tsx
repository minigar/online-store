import React, { FC, useState } from "react";
import { IProduct } from "./types/types";
import Image from "./UI/Image/Image";
import "./styles/ProductItem.css";
import Button from "./UI/Button/Button";
import Modal from "./UI/Modal/Modal";
import QuantityButtons from "./QuantityButtons";
import { useNavigate } from "react-router-dom";

interface ProductItemProps {
  product: IProduct;
  addToCart: ({ id, name, price, quantity, imgUrl }: IProduct) => void;
}

const ProductItem: FC<ProductItemProps> = ({ product, addToCart }) => {
  const [visibleAddToCart, setVisibleAddToCart] = useState(true);
  const [visibleQauntity, setVisibleQuantity] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  const toProductPage = (id: number) => {
    navigate(`/products/${id}`);
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const removeQuantity = () => {
    if (quantity < 2) {
      return;
    }
    setQuantity(quantity - 1);
  };
  const mapAddtoCartButton = () => {
    setVisibleQuantity(false);
    setVisibleAddToCart(true);
  };

  const mapQuantity = () => {
    setVisibleAddToCart(false);
    setVisibleQuantity(true);
  };

  return (
    <div className="product">
      <Image
        src={product.imgUrl}
        alt="black square"
        width={130}
        height={100}
        className="productImg"
        onClick={() => {
          toProductPage(product.id);
        }}
      />
      <br />
      <div id="product__details"
        onClick={() => {
          toProductPage(product.id);
        }}
      >
        {product.name} <br /> {product.price}$ <br />
        quantity: {product.quantity}
      </div>
      <br />
      <Modal
        style={{ position: "relative", right: "30px" }}
        visible={visibleQauntity}
        setVisible={setVisibleQuantity}
      >
        <QuantityButtons
          product={product}
          quantity={quantity}
          mapAddtoCartButton={mapAddtoCartButton}
          addQuantity={addQuantity}
          removeQuantity={removeQuantity}
          addToCart={({ id, name, price, quantity, imgUrl }: IProduct) => {
            addToCart({
              id,
              name,
              price,
              quantity,
              imgUrl,
            });
          }}
        />
      </Modal>
      <Modal visible={visibleAddToCart} setVisible={setVisibleAddToCart}>
        <br /> <br />
        <Button onClick={mapQuantity}>
          <div>Add to Cart</div>
        </Button>
      </Modal>
    </div>
  );
};

export default ProductItem;
