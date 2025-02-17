import React from "react";

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
              </li>
              <li>
                <a href="/">Jewellery</a>
              </li>
              <li>
                <a href="/">furniture</a>
              </li>
              <li>
                <a href="/">Autoparts</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Category;
