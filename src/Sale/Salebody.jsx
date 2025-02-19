import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Advertising from "../Shop/Advertising";
import ShopBrand from "../Shop/ShopBrand";
import Proudeselect from "../Shop/Proudeselect";
import Shopitem from "../Shop/Shopitem";
import Bestseller from "../Shop/Bestseller";
import SelaCategory from "./SaleCategory";
import SaleFilterby from "./SaleFilterby";
const Salebody = () => {
  return (
    <>
      <div className="container">
        <div className="mina-shop">
          <div className="left">
          <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Sale</Breadcrumb.Item>
            </Breadcrumb>
          <SelaCategory/>
            <SaleFilterby/>
            <Advertising />
          </div>
      <div className="right">
            <ShopBrand  title="Sale" Ptext="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
            <Proudeselect title="Sale" />
            <Shopitem />
            <Bestseller />
          </div>
        </div>
      </div>
    </>
  );
};
export default Salebody;
