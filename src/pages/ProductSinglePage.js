// import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { Button, notification, Space } from "antd";
// import { ShopContext } from "../context/Shop-context";
// import "./productsinglepage.css";
// import { Rate } from "antd";

// const ProductSinglePage = ({ products }) => {
//   const { addToCart, cartItems } = useContext(ShopContext);

//   const { id } = useParams();

//   const product = products.find((product) => product.id === parseInt(id));

//   const [api, contextHolder] = notification.useNotification();
//   const openNotificationWithIcon = (type) => {
//     api[type]({
//       message: "Your item has been",
//       description: "added to cart.",
//     });
//   };

//   // Render the product details

//   return (
//     <div>
//       {contextHolder}

//       {product ? (
//         <div className="product-single-page">
//           <img
//             src={product.productImage}
//             alt={product.productName}
//             className="single-pg-img"
//           />
//           <div className="desc-product-single-page">
//             <h1> {product.productName}</h1>
//             <p style={{ color: "gray" }}>
//               Ratings: <Rate defaultValue={2} />
//             </p>
//             <p style={{ color: "gray" }}>
//               Brand:
//               <span style={{ color: "#1684A8" }}> No Brand</span>
//             </p>

//             <p style={{ color: "gray" }}>
//               Price:
//               <span style={{ color: "#F8631D" }}> Rs {product.price}</span>
//             </p>

//             <Button
//               type="primary"
//               onClick={() => {
//                 addToCart(product.id);
//                 openNotificationWithIcon("success");
//               }}
//             >
//               Add to cart
//             </Button>
//           </div>
//         </div>
//       ) : (
//         <p>Product not found</p>
//       )}
//     </div>
//   );
// };

// export default ProductSinglePage;

// new code 9/3/2024
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, notification, Rate } from "antd";
import { ShopContext } from "../context/Shop-context";
import "./productsinglepage.css";

const ProductSinglePage = ({ products }) => {
  const { addToCart } = useContext(ShopContext);
  const { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Your item has been",
      description: "added to cart.",
    });
  };

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
            <h1>{product.productName}</h1>
            <p style={{ color: "gray" }}>
              Ratings: <Rate defaultValue={2} />
            </p>
            <p style={{ color: "gray" }}>
              Brand: <span style={{ color: "#1684A8" }}>No Brand</span>
            </p>
            <p style={{ color: "gray" }}>
              Price:{" "}
              <span style={{ color: "#F8631D" }}>Rs {product.price}</span>
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
