import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/Shop-context";
import { PRODUCTS } from "../../products";
import { Button, notification, Space } from "antd";
import "./shop.css";
import { Link } from "react-router-dom";

const Topdeals = () => {
  const [state, setState] = useState([]);
  const { addToCart, cartItems } = useContext(ShopContext);

  const navigate = useNavigate();

  function filterCategory() {
    let res = PRODUCTS.filter((item) => item.category === "banner");
    setState(res);
  }

  React.useEffect(() => {
    filterCategory();
  }, []);

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Dear user your item has been",
      description: "added to Cart.",
    });
  };

  return (
    <div>
      {" "}
      {contextHolder}
      <span className="topdeals-title">Top Deals</span>
      <div className="shopmore">
        <button className="shop-btn" onClick={() => navigate("/topbrands")}>
          SHOP MORE
        </button>
      </div>
      <div className="topdeals">
        {state.map((data) => {
          return (
            <div className="topdeals-item">
              <img src={data.productImage} alt="img" />

              <Button
                type="primary"
                className="addToCart"
                onClick={() => {
                  addToCart(data.id);
                  openNotificationWithIcon("success");
                }}
              >
                Add to cart
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Topdeals;
