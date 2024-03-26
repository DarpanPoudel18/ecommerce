import React from "react";

const ProductSinglePage = ({ imageUrl, imageName }) => {
  return (
    <div>
      <h1>Single Image Page</h1>
      <img src={imageUrl} alt={imageName} />
      <p>Image Names: {imageName}</p>
    </div>
  );
};

export default ProductSinglePage;
