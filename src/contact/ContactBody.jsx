import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Information from "./Information";
import Contactform from "./Contactform";

const ContactBudy = () => {
  return (
    <>
      <div className="container">
        <div className="mina-shop">
          <div className="con-left">
          <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Contact us</Breadcrumb.Item>
            </Breadcrumb>
            <Information />
          </div>
          <div className="right">
            <Contactform />
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactBudy;
