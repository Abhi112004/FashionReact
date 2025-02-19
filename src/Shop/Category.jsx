import React from "react";
import { FaPlus } from "react-icons/fa6";
const Category = () => {
  return (
    <>
      <div className="shop-page-outer">
        <ul className="shop-inner">
          <li>
            <a href="/" className="shop-title">shop</a>
          </li>
          <li>
            <ul className="sub-title">
              <li>
                <a href="/">fashion</a>
                <span><FaPlus /></span>
              </li>
              <li>
                <a href="/">Jewellery</a>
                <span><FaPlus /></span>
              </li>
              <li>
                <a href="/">furniture</a>
                <span><FaPlus /></span>
              </li>
              <li>
                <a href="/">Autoparts</a>
                <span><FaPlus /></span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Category;
