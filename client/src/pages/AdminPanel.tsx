import React, { FC, useState } from "react";
import Button from "../components/UI/Button/Button";
import Input from "../components/UI/Input/Input";
import "./styles/AdminPanel.css";
import { CreateProduct } from "../components/types/types";

interface AdminPanelProps {
  createProductByAdmin: ({ name, price, quantity, imgUrl }: CreateProduct) => void;
}

const AdminPanel: FC<AdminPanelProps> = ({ createProductByAdmin }) => {
  const [productName, setProductName] = useState("");
  const [productImgUrl, setProductImgUrl] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setValue: (value: any) => void
  ) => {
    setValue(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div className={"crete-product"}>
      <h3 id="create-product-text">Create Product</h3>
      <Input
        placeholder="Name"
        value={productName}
        onChange={(event) => {
          handleChange(event, setProductName);
          console.log(productName);
        }}
      />
      <br />
      <br />
      <Input
        placeholder="Image Url"
        value={productImgUrl}
        onChange={(event) => {
          handleChange(event, setProductImgUrl);
        }}
      />
      <br />
      <br />
      <Input
        placeholder="Price"
        style={{ maxWidth: "8%" }}
        value={productPrice}
        onChange={(event) => {
          handleChange(event, setProductPrice);
        }}
      />
      <Input
        placeholder="Quantity"
        style={{ maxWidth: "8%" }}
        value={productQuantity}
        onChange={(event) => {
          handleChange(event, setProductQuantity);
        }}
      />
      <Button
        onClick={() => {
          createProductByAdmin({
            name: productName,
            price: Number(productPrice),
            quantity: Number(productQuantity),
            imgUrl:
              productImgUrl ||
              "https://content2.rozetka.com.ua/goods/images/big/61936672.jpg",
          });
        }}
      >
        Create{" "}
      </Button>
    </div>
  );
};

export default AdminPanel;
