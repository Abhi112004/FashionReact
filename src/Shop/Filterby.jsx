import React from "react";
import { FaChevronDown } from "react-icons/fa";
const Filterby = () => {
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
                <a href="/">Categories</a>
               <span> <FaChevronDown /></span>
              </li>
              <li>
                <a href="/">Size</a>
                <span> <FaChevronDown /></span>
              </li>
              <li>
                <a href="/">Color</a>
                <span> <FaChevronDown /></span>
              </li>
              <li>
                <a href="/">Composition</a>
                <span> <FaChevronDown /></span>
              </li>
              <li>
                <a href="/">Property</a>
                <span> <FaChevronDown /></span>
              </li>
              <li>
                <a href="/">Brand</a>
                <span> <FaChevronDown /></span>
              </li>
              <li>
                <a href="/">Weight</a>
                <span> <FaChevronDown /></span>
              </li>
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
export default Filterby;
