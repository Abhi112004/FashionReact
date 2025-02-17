import React from "react";
import BrandItem from "./BrandItem";

const Brand = () => {
  return (
    <>
      <div className="brand-outer">
        <div className="container">
          <div className="title">
            <h2>
              shop by <i>brand </i>
            </h2>
          </div>
          <div className="brand-inner">
            <BrandItem img="assets/image/1.jpg" />
            <BrandItem img="assets/image/2.jpg" />
            <BrandItem img="assets/image/3.jpg" />
            <BrandItem img="assets/image/4.jpg" />
            <BrandItem img="assets/image/5.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Brand;
