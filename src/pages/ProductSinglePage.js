import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, notification, Space } from "antd";
import { ShopContext } from "../context/Shop-context";
import "./productsinglepage.css";
import { Rate } from "antd";

const ProductSinglePage = ({ products }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  // product ID from the URL using useParams
  const { id } = useParams();

  // product with the matching ID
  const product = products.find((product) => product.id === parseInt(id));

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Your item has been",
      description: "added to cart.",
    });
  };

  // Render the product details

  return (
    <div>
      {contextHolder}

      {product ? (
        <div className="product-single-page">
          <img
            src={product.productImage}
            alt={product.productName}
            className="single-pg-img"
          />
          <div className="desc-product-single-page">
            <h1> {product.productName}</h1>
            <p style={{ color: "gray" }}>
              Ratings: <Rate defaultValue={2} />
            </p>
            <p style={{ color: "gray" }}>
              Brand:
              <span style={{ color: "#1684A8" }}> No Brand</span>
            </p>

            <h3 style={{ color: "#4096FF" }}> Rs {product.price}</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <Button
              type="primary"
              onClick={() => {
                addToCart(product.id);
                openNotificationWithIcon("success");
              }}
            >
              Add to cart
            </Button>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductSinglePage;
