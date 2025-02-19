import React from "react";
import { FaChevronDown } from "react-icons/fa";
const  SaleFilterby= () => {
  return (
    <>
      <div className="Filter-page-outer">
        <ul className="Filter-inner">
          <li>
            <a href="/" className="Filter-title">
            Filter By
            </a>
          </li>
          <li>
            <ul className="Filter-sub-title">
             
              <li>
                <a href="/">Price</a>
                <span> <FaChevronDown /></span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
export default SaleFilterby;
