import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import vector from "../../src/images/vector.svg";
import d from "../../src/images/d.jpg";
import "./Navbar.css";

import {
  UserOutlined,
  HomeOutlined,
  createFromIconfontCN,
} from "@ant-design/icons";
import { Button, Input, Space, notification } from "antd";
import Account from "../pages/MyAccount/Account";
import { ShopContext } from "../context/Shop-context";

const Navbar = ({ products }) => {
  const navigate = useNavigate();
  const { Search } = Input;
  const { cartItems, getTotalCartQuantity } = useContext(ShopContext);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onSearch = (query) => {
    const filteredProducts = products.filter((product) =>
      product.productName.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredProducts);
    navigate(`/searchresults?q=${query}`);
  };

  return (
    <div className="navbar">
      <img src={d} alt="d-logo" className="dlogo" />

      <Space>
        <Search
          placeholder="Search for products, brands and shops."
          onChange={(e) => setSearch(e.target.value)}
          onSearch={onSearch}
          enterButton
          className="searchbar"
        />
      </Space>

      <div className="links">
        <Link to="/">
          <HomeOutlined className="home-logo" />
        </Link>

        <Link to="/cart" className="cart-link">
          <ShoppingCart className="cart-logo" />
          <span className="cart-badge">{getTotalCartQuantity()}</span>
        </Link>

        <img src={vector} alt="img" className="vector-logo" />
      </div>
    </div>
  );
};

export default Navbar;
