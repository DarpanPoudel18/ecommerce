import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, notification, Space } from "antd";
import { ShopContext } from "../context/Shop-context";

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
      <h1>Product Details</h1>
      {product ? (
        <div>
          <img src={product.productImage} alt={product.productName} />
          <p>Product Name: {product.productName}</p>
          <p>Price: Rs {product.price}</p>
          {/* Add more details here if needed */}
        </div>
      ) : (
        <p>Product not found</p>
      )}
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
  );
};

export default ProductSinglePage;
