import React, { FC, useState } from "react";
import Image from "./UI/Image/Image";
import Input from "./UI/Input/Input";
import "./styles/Header.css";
import Modal from "./UI/Modal/Modal";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const Header: FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const openBasket = () => {
    setVisible(true);
  };

  return (
    <header>
      <Image
        src={require("../images/search.png")}
        alt="Search"
        width={30}
        height={30}
        className="searchImg"
      />
      <Input
        placeholder="Serch the product by name..."
        id="search"
        value={searchQuery}
        onChange={(e: any) => setSearchQuery(e.target.value)}
      />
      <Image
        src={require("../images/basket.jpg")}
        alt="Search"
        width={30}
        height={30}
        className="basketImg"
        onClick={openBasket}
      />

      <Modal visible={visible} setVisible={setVisible}>
        <div>
          Your Shopping Cart
          <div className="cartItems"></div>
        </div>
      </Modal>
    </header>
  );
};

export default Header;
