import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = ({ products }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <img src={product.productImage} alt={product.productName} />
            <h3>{product.productName}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
