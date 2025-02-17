import React from "react";
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
              </li>
              <li>
                <a href="/">Size</a>
              </li>
              <li>
                <a href="/">Color</a>
              </li>
              <li>
                <a href="/">Composition</a>
              </li>
              <li>
                <a href="/">Property</a>
              </li>
              <li>
                <a href="/">Brand</a>
              </li>
              <li>
                <a href="/">Weight</a>
              </li>
              <li>
                <a href="/">Price</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Filterby;
