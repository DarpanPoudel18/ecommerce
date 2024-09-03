import React, { useState } from "react";
import "./categories.css";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="menu-btn" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`categories ${isOpen ? "active" : ""}`}>
        <span className="close-btn" onClick={toggleSidebar}>
          &times;
        </span>

        <div className="cat-links">
          <NavLink to="/electronics" onClick={toggleSidebar}>
            Electronics
          </NavLink>
          <NavLink to="/homeandliving" onClick={toggleSidebar}>
            Home & Living
          </NavLink>
          <NavLink to="/mens" onClick={toggleSidebar}>
            Men's Fashion
          </NavLink>
          <NavLink to="/sports" onClick={toggleSidebar}>
            Sports
          </NavLink>
          <NavLink to="/topbrands" onClick={toggleSidebar}>
            Top Brands
          </NavLink>
          <NavLink to="/womens" onClick={toggleSidebar}>
            Women's Fashion
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Categories;
