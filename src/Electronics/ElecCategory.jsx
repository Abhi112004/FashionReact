import React from "react";

const ElecCategory = () => {
  return (
    <>
      <div className="shop-page-outer">
        <ul className="shop-inner">
          <li>
            <a href="/" className="shop-title">
              Electronics
            </a>
          </li>
          <li>
            <ul className="sub-title">
              <li>
                <a href="/">mobiles</a>
              </li>
              <li>
                <a href="/">cameras</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
export default ElecCategory;
