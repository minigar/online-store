import { Button, TextField } from "@mui/material";
import React, { FC, useState } from "react";
import { createProductByAdmin } from "../api/helpers/products";

interface CreateProductByAdminPanelProps {
  handleChange: (event: any, setValue: (value: any) => void) => void;
}

const CreateProductByAdminPanel: FC<CreateProductByAdminPanelProps> = ({
  handleChange,
}) => {
  const [productName, setProductName] = useState("");
  const [productImgUrl, setProductImgUrl] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);

  return (
    <div className={"admin__panel__crete__product"}>
      <h3 id="admin__panel__crete__product__text">Create Product</h3>
      <br />
      <br />

      <TextField
        value={productName}
        className="input"
        variant="outlined"
        size="small"
        label="name"
        placeholder="name"
        color="secondary"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(event, setProductName);
        }}
        style={{ maxHeight: "100%" }}
      />
      <br />
      <br />
      <br />
      <br />

      <TextField
        value={productImgUrl}
        className="input"
        variant="outlined"
        size="small"
        label="image url"
        placeholder="image url"
        color="secondary"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(event, setProductImgUrl);
        }}
      />
      <br />
      <br />
      <br />
      <br />

      <TextField
        value={productPrice}
        className="input"
        variant="outlined"
        size="small"
        label="price"
        placeholder="price"
        style={{ maxWidth: "8%", marginRight: "30px" }}
        color="secondary"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(event, setProductPrice);
        }}
      />

      <TextField
        value={productQuantity}
        className="input"
        variant="outlined"
        size="small"
        label="quantity"
        placeholder="quantity"
        style={{ maxWidth: "8%", marginRight: "30px" }}
        color="secondary"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(event, setProductQuantity);
        }}
      />

      <Button
        variant="outlined"
        color="success"
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
          setProductPrice(0);
          setProductQuantity(1);
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
  );
};

export default CreateProductByAdminPanel;
