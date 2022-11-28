import React from "react";
import Button from "../components/UI/Button/Button";
import Input from "../components/UI/Input/Input";
import "./styles/AdminPanel.css";

const AdminPanel = () => {
  return (
    <div className={'crete-product'}>
      <h3 id="create-product-text">Create Product</h3>
      <Input placeholder="Enter product name" />
      <br />
      <br />
      <Input placeholder="Enter product image Url" />
      <br />
      <br />
      <Input placeholder="Enter product price" style={{maxWidth: '8%'}}/>
      <Input placeholder="Enter product quantity" style={{maxWidth: '8%'}} />
      <Button> Create </Button>
    </div>
  );
};

export default AdminPanel;
