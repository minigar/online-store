import React, { FC, useState } from "react";
import Button from "../components/UI/Button/Button";
import Input from "../components/UI/Input/Input";
import "./styles/AdminPanel.css";
import { CreateProduct } from "../components/types/types";
import { deleteById } from "../api/helpers/products";
import Label from "../components/UI/Label/Label";
import { Tooltip } from "@mui/material";

interface AdminPanelProps {
  createProductByAdmin: ({
    name,
    price,
    quantity,
    imgUrl,
  }: CreateProduct) => void;
}

const AdminPanel: FC<AdminPanelProps> = ({ createProductByAdmin }) => {
  const [productName, setProductName] = useState("");
  const [productImgUrl, setProductImgUrl] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productId, setProductId] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setValue: (value: any) => void
  ) => {
    setValue(event.target.value);
  };

  return (
    <div className={"admin__panel"}>
      <div className={"admin__panel__crete__product"}>
        <h3 id="admin__panel__crete__product__text">Create Product</h3>
        <Label htmlFor="name">Name:</Label>
        <br />
        <br />
        <Tooltip title="name" placement="top">
          <Input
            id="name"
            placeholder="Name"
            value={productName}
            onChange={(event) => {
              handleChange(event, setProductName);
            }}
          ></Input>
        </Tooltip>
        <br />
        <br />
        <Label htmlFor="url">Image Url:</Label>
        <br />
        <br />
        <Tooltip title="url" placement="top">
          <Input
            placeholder="Image Url"
            value={productImgUrl}
            onChange={(event) => {
              handleChange(event, setProductImgUrl);
            }}
          />
        </Tooltip>
        <br />
        <br />
        <Label htmlFor="price">Price:</Label>
        <Label htmlFor="quantity" style={{ marginLeft: "6%" }}>
          Quantity:
        </Label>
        <br />
        <br />
        <Tooltip title="price">
          <Input
            id="price"
            placeholder="Price"
            style={{ maxWidth: "8%" }}
            value={productPrice}
            onChange={(event) => {
              handleChange(event, setProductPrice);
            }}
          />
        </Tooltip>
        <Tooltip title="quantity">
          <Input
            id="quantity"
            placeholder="Quantity"
            style={{ maxWidth: "8%" }}
            value={productQuantity}
            onChange={(event) => {
              handleChange(event, setProductQuantity);
            }}
          />
        </Tooltip>
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

            setProductName("");
            setProductImgUrl("");
            setProductPrice("");
            setProductQuantity("");
          }}
        >
          Create
        </Button>
        <br />
        <br />
        <br />
        <hr />
        <br />
      </div>

      <div className={"admin__panel__delete__prroduct"}>
        <h3 id="admin__panel__delete__prroduct__text">Delete Product by Id</h3>

        <Tooltip title="id">
          <Input
            value={productId}
            onChange={(event) => {
              handleChange(event, setProductId);
            }}
            placeholder="Enter the id"
            style={{ maxWidth: "20%" }}
          />
        </Tooltip>
        <br />
        <br />
        <Button
          onClick={() => {
            deleteById(Number(productId));
            setProductId("");
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default AdminPanel;
