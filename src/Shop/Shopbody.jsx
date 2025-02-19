import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Category from "./Category";
import Filterby from "./Filterby";
import Advertising from "./Advertising";
import ShopBrand from "./ShopBrand";
import Shopitem from "./Shopitem";
import Bestseller from "./Bestseller";
import Proudeselect from "./Proudeselect";

const Shopbody = () => {
  return (
    <>
      <div className="container">
        <div className="mina-shop">
          <div className="left">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Shop</Breadcrumb.Item>
            </Breadcrumb>
            <Category />
            <Filterby />
            <Advertising />
          </div>
          <div className="right">
            <ShopBrand
              title="Shop"
              Ptext="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            />
            <Proudeselect title="Shop" />
            <Shopitem />
            <Bestseller />
          </div>
        </div>
      </div>
    </>
  );
};
export default Shopbody;
