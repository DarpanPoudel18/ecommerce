import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";

import Categories from "./pages/Categories/Categories";
import Electronics from "./pages/Categories/Electronics";
import HomeAndLiving from "./pages/Categories/HomeAndLiving";
import Mens from "./pages/Categories/Mens";
import Sports from "./pages/Categories/Sports";
import Topbrands from "./pages/Categories/Topbrands";
import Womens from "./pages/Categories/Womens";
import Test from "./pages/Categories/Test";
import Account from "./pages/MyAccount/Account";

import { ShopContextProvider } from "./context/Shop-context";
import Footer from "./components/Footer/Footer";
import ProductSinglePage from "./pages/ProductSinglePage";
import { PRODUCTS } from "./products";
import Searchresult from "./pages/Searchresult";

const App = () => {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar products={PRODUCTS} />
          <Categories />

          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/homeandliving" element={<HomeAndLiving />} />
            <Route path="/mens" element={<Mens />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/topbrands" element={<Topbrands />} />
            <Route path="/womens" element={<Womens />} />
            <Route path="/test" element={<Test />} />
            <Route path="/account" element={<Account />} />
            <Route
              path="/product/:id"
              element={<ProductSinglePage products={PRODUCTS} />}
            />

            <Route
              path="/searchresults"
              element={<Searchresult products={PRODUCTS} />}
            />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
};

export default App;
