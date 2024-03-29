import React from "react";
import { useParams } from "react-router-dom";

const ProductSinglePage = ({ products }) => {
  // Get the product ID from the URL using useParams
  const { id } = useParams();

  // Find the product with the matching ID
  const product = products.find((product) => product.id === parseInt(id));

  // Render the product details
  return (
    <div>
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
    </div>
  );
};

export default ProductSinglePage;
