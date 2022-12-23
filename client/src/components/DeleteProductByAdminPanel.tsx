import { Button, TextField } from "@mui/material";
import React, { FC, useState } from "react";
import { deleteById } from "../api/helpers/products";

interface DeleteProductByAdminPanelProps {
  handleChange: (event: any, setValue: (value: any) => void) => void;
}

export const DeleteProductByAdminPanel: FC<DeleteProductByAdminPanelProps> = ({
  handleChange,
}) => {
  const [productId, setProductId] = useState("");

  return (
    <div className={"admin__panel__delete__prroduct"}>
      <h3 id="admin__panel__delete__prroduct__text">Delete Product by Id</h3>

      <TextField
        value={productId}
        className="input"
        variant="outlined"
        size="small"
        label="Id"
        placeholder="Id"
        color="secondary"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(event, setProductId);
        }}
      />
      <br />
      <br />
      <Button
        variant="outlined"
        color="error"
        onClick={() => {
          deleteById(Number(productId));
          setProductId("");
        }}
      >
        Delete
      </Button>
    </div>
  );
};
