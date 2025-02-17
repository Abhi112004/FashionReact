import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
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
          <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
            <Category />
            <Filterby />
            <Advertising />
          </div>
          <div className="right">
            <ShopBrand title="Shop" Ptext="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" />
            <Proudeselect title="Shop"  />
            <Shopitem />
            <Bestseller />
          </div>
        </div>
      </div>
    </>
  );
};
export default Shopbody;
