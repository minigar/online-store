import React, { FC } from "react";
import "./styles/AdminPanel.css";
import CreateProductByAdminPanel from "../components/CreateProductByAdminPanel";
import { DeleteProductByAdminPanel } from "../components/DeleteProductByAdminPanel";

interface AdminPanelProps {}

const AdminPanel: FC<AdminPanelProps> = () => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setValue: (value: any) => void
  ) => {
    setValue(event.target.value);
  };

  return (
    <div className={"admin__panel"}>
      <CreateProductByAdminPanel handleChange={handleChange} />

      <DeleteProductByAdminPanel handleChange={handleChange} />
    </div>
  );
};

export default AdminPanel;
