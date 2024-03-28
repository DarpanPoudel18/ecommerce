import React from "react";
import { useLocation } from "react-router-dom";
import { Button, notification, Space } from "antd";
import { ShopContext } from "../context/Shop-context";
import "./searchresult.css";
import { Card } from "antd";

const Searchresult = ({ products }) => {
  const { Meta } = Card;
  const [state, setState] = React.useState([]);
  const { addToCart, cartItems } = React.useContext(ShopContext);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(query.toLowerCase())
  );

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Dear user your item has been",
      description: "added to Cart.",
    });
  };
  return (
    <div className="search-Results">
      <h2>
        {filteredProducts.length} items found for "{query}"
      </h2>
      <div className="search-product-list">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="search-product" hoverable>
            <img
              src={product.productImage}
              alt={product.productName}
              className="searched-img"
            />
            <div className="search-description">
              <h3>
                <Meta title={product.productName} description="" />
              </h3>
              <p>Price: Rs {product.price}</p>
            </div>
            <Button
              type="primary"
              onClick={() => {
                addToCart(product.id);
                openNotificationWithIcon("success");
              }}
            >
              Add to cart
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Searchresult;
