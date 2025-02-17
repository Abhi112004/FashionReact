import React from "react";
import ShopItem from "./ShopItem";

const Shop = () => {
  return (
    <>
      <div className="shop-outer">
        <div className="container">
          <div className="title">
            <h2>shop by category</h2>
          </div>
          <div className="shop-item-row">
            <ShopItem img="assets/image/thumb1.png" text="Shop"/>
            <ShopItem img="assets/image/thumb2.png" text="Shoprts"/>
            <ShopItem img="assets/image/thumb3.jpg" text="Electronics"/>
            <ShopItem img="assets/image/thumb4.jpg" text="Sale"/>
            <ShopItem img="assets/image/thumb5.jpg" text="Fashion"/>
            <ShopItem img="assets/image/thumb6.jpg" text="Jewellery"/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;
