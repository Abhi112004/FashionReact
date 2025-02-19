import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import Filterby from "../Shop/Filterby";
import Advertising from "../Shop/Advertising";
import ShopBrand from "../Shop/ShopBrand";
import Proudeselect from "../Shop/Proudeselect";
import Shopitem from "../Shop/Shopitem";
import Bestseller from "../Shop/Bestseller";
import ElecCategory from "./ElecCategory";
const Electronicsbody = () => {
  return (
    <>
      <div className="container">
        <div className="mina-shop">
          <div className="left">
          <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Electronics</Breadcrumb.Item>
            </Breadcrumb>
            <ElecCategory/>
            <Filterby />
            <Advertising />
          </div>
          <div className="right">
            <ShopBrand  title="Electronics" Ptext="Excepteur sint occaecat cupidatat non proident. sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            <Proudeselect title="Electronics"  />
            <Shopitem />
            <Bestseller />
          </div>
        </div>
      </div>
    </>
  );
};
export default Electronicsbody;
