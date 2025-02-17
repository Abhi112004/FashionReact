import React from "react";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Information = () => {
  return (
    <>
      <div className="contact-rich">
        <h4>Store information</h4>
        <div className="contact-block">
          <div className="contact-icon">
            <span>
              <IoLocationSharp />
            </span>
          </div>
          <div className="contact-text">
            Etrend
            <br />
            123 Street, London
            <br />
            United States
          </div>
        </div>
        <div className="contact-block">
          <div className="contact-icon">
            <span>
              <IoCall />
            </span>
          </div>
          <div className="contact-text">
            <div class="data">
              Call us:
              <br />
              <a href="tel:(123) 456 7890">(123) 456 7890</a>
            </div>
          </div>
        </div>
        <div className="contact-block">
          <div className="contact-icon">
            <span>
              <MdEmail />
            </span>
          </div>
          <div className="contact-text">
            Email us:
            <br />
            <a href="mailto:sales@domain.com">sales@domain.com</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Information;
