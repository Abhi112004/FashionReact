import React from "react";
import FeaturedItem from "./FeaturedItem";

const Fashion = () => {
  return (
    <>
      <div className="featured-outer">
        <div className="container">
          <div className="title">
            <h2>
              featured <i>Collection</i>
            </h2>
          </div>
          <div className="featured-inner">
            <FeaturedItem
              img="assets/image/accusantium-dolore.jpg"
              img2="assets/image/accusantium-dolore6.jpg"
              text="Women's Slim Fit Shorts"
              pri="123.65"
              sale="none"
              priS="none"
              nosale="block"
            />
            <FeaturedItem
              img="assets/image/accusantium-dolore2.jpg"
              img2="assets/image/accusantium-dolore8.jpg"
              text="Women's Floral Printed Dresses"
              pri="110.73"
              sale="none"
              nosale="block"
                 priS="none"
            />
            <FeaturedItem
              img="assets/image/accusantium-dolore3.jpg"
              img2="assets/image/accusantium-dolore7.jpg"
              text="Women's Regular Top"
              pri="99.00"
              sale="none"
              nosale="none"
                 priS="none"
            />
            <FeaturedItem
              img="assets/image/accusantium-dolore4.jpg"
              img2="assets/image/accusantium-dolore5.jpg"
              text="Women's Regular Short Kurti"
              pri="168.18"
              sale="block"
              nosale="none"
              salep="-18"
              pri1="199.00"
            />
            <FeaturedItem
              img="assets/image/accusantium-dolore5.jpg"
              img2="assets/image/accusantium-dolore4.jpg"
              text="Men's Quilted Bomber Jacket"
              pri="224.25"
              sale="block"
              nosale="none"
              salep="25"
               pri1="299.00"
            />
            <FeaturedItem
              img="assets/image/accusantium-dolore6.jpg"
              img2="assets/image/accusantium-dolore3.jpg"
              text="Crop Top for Women's Casual..."
              pri="224.25"
              sale="block"
              nosale="none"
              salep="10"
               pri1="249.00"
            />
            <FeaturedItem
              img="assets/image/accusantium-dolore7.jpg"
              img2="assets/image/accusantium-dolore2.jpg"
              text="Women's One Piece Western..."
              pri="202.30"
              sale="block"
              nosale="none"
              salep="30"
               pri1="289.00"
            />
        
            <FeaturedItem
              img="assets/image/accusantium-dolore8.jpg"
              img2="assets/image/accusantium-dolore.jpg"
              text="Regular Fit Full Sleeve..."
              pri="237.15"
              sale="block"
              nosale="none"
              salep="10"
               pri1="279.00"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Fashion;
