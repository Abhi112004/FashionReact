import React from "react";
import { FaPlus } from "react-icons/fa6";

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
                  <span><FaPlus /></span>
             
              </li>
              <li>
                <a href="/">cameras</a>
                  <span><FaPlus /></span>
            
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
export default ElecCategory;
