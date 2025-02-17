import React from "react";
const Service = () => {
  return (
    <>
      <div className="service-outer">
        <div className="container">
          <div className="service-inner">
            <div className="service-item">
              <div className="service-item-inner">
                <div className="icon">
                  <img src="assets/image/24.png" alt=" 24/7 Online Support" />
                </div>
                <div className="service-text">
                  <strong> 24/7 Online Support </strong>
                  <p>Trained staffs are ready to help 24/7</p>
                </div>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-inner">
                <div className="icon">
                  <img
                    src="assets/image/money-back.png"
                    alt="Money Back Guarantee"
                  />
                </div>
                <div className="service-text">
                  <strong> Money Back Guarantee </strong>
                  <p>100% money back guarantee</p>
                </div>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-inner">
                <div className="icon">
                  <img
                    src="assets/image/free-shipping.png"
                    alt="Free Shipping"
                  />
                </div>
                <div className="service-text">
                  <strong> Free Shipping & Return </strong>
                  <p>Free shipping on all orders over $100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
