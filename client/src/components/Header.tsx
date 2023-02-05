import React, { FC } from "react";
import Image from "./UI/Image/Image";
import "./styles/Header.css";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { IProduct } from "./types/types";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  products: IProduct[];
}

const Header: FC<HeaderProps> = ({ searchQuery, setSearchQuery, products }) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  const navigate = useNavigate();

  const toApminPanel = () => {
    navigate("/admin-panel");
  };

  const toHome = () => {
    navigate("/");
  };

  const toCart = () => {
    navigate("/cart");
  };

  return (
    <header className="header">
      {isAuth === true ? (
        <h2
          className="logout__text"
          onClick={() => {
            localStorage.removeItem("access_token");
            localStorage.setItem("isAuth", "false");
            navigate("/");
            window.location.reload();
          }}
        >
          Logout
        </h2>
      ) : (
        <h2 className="logout__text" onClick={() => {
          navigate('/login')
        }}>Login</h2>
      )}

      <h2 className="header__home__text" onClick={toHome}>
        HOME
      </h2>
      {isAuth === true ? (
        <h2 className="header__amdin__panel__text" onClick={toApminPanel}>
          Admin Panel
        </h2>
      ) : (
        ""
      )}

      <Image
        src={require("../images/search.png")}
        alt="Search"
        width={40}
        height={40}
        className="header__search__img"
      />

      <TextField
        type="search"
        variant="outlined"
        size="small"
        placeholder="Serch the product by name..."
        label="Serch the product by name..."
        color="secondary"
        className="search"
        value={searchQuery}
        onChange={(e: any) => setSearchQuery(e.target.value)}
      />

      <Image
        src={require("../images/cart.jpg")}
        alt="Cart"
        width={40}
        height={40}
        className="header__cart__img"
        onClick={toCart}
      />
    </header>
  );
};

export default Header;
