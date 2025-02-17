import React from "react";
import Information from "./Information";
import Contactform from "./Contactform";

const ContactBudy = () => {
  return (
    <>
      <div className="container">
        <div className="mina-shop">
          <div className="con-left">
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
