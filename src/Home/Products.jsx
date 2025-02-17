import React from "react";
import FeaturedItem from "./FeaturedItem";

const Products = () => {
  return (
    <>
      <div className="featured-outer">
        <div className="container">
          <div className="title">
            <h2>
              New <i>Products</i>
            </h2>
          </div>
          <div className="featured-inner">
          <FeaturedItem
              img="assets/image/accusantium-dolore2.jpg"
              img2="assets/image/accusantium-dolore3.jpg"
              text="Women's Slim Fit Shorts"
              pri="333.32"
              sale="block"
              nosale="none"
              salep="12"
              pri1="379.00"
            />
          <FeaturedItem
              img="assets/image/accusantium-dolore3.jpg"
              img2="assets/image/accusantium-dolore6.jpg"
              text="Women's Dark Blue Shorts"
              pri="311.20"
              sale="block"
              nosale="none"
              salep="20"
              pri1="389.00"
            />
          <FeaturedItem
              img="assets/image/accusantium-dolore6.jpg"
              img2="assets/image/accusantium-dolore8.jpg"
              text="Women's Regular fit TOP"
              pri="359.10"
              sale="block"
              nosale="none"
              salep="10"
              pri1="399.00"
            />
          <FeaturedItem
              img="assets/image/accusantium-dolore7.jpg"
              img2="assets/image/accusantium-dolore.jpg"
              text="Women's Regular fit TOP"
              pri="226.85"
              sale="block"
              nosale="none"
              salep="35"
              pri1="349.00"
            />
          
         
          
          
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;