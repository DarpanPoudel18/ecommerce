import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";
import { Card } from "antd";
const Cartitem = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return <div className="cartItem"></div>;
};
export default Cartitem;
