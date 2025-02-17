import React from "react";
import Advertising from "../Shop/Advertising";
import ShopBrand from "../Shop/ShopBrand";
import Proudeselect from "../Shop/Proudeselect";
import Shopitem from "../Shop/Shopitem";
import Bestseller from "../Shop/Bestseller";
import SbCategory from "./SbCategory";
const Sportsbooksbody = () => {
  return (
    <>
      <div className="container">
        <div className="mina-shop">
          <div className="left">
            <SbCategory/>
            {/* <Filterby /> */}
            <Advertising />
          </div>
          <div className="right">
            <ShopBrand  title="Sports & books" Ptext="Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <Proudeselect title="Sports & books"/>
            <Shopitem />
            <Bestseller />
          </div>
        </div>
      </div>
    </>
  );
};
export default Sportsbooksbody;
