import React from "react";
const Customer = () => {
  return (
    <>
      <div className="customer-outer">
        <div className="container">
          <div className="customer-inner">
            <div className="customer-photo">
              <img src="assets/image/testimonial1.png" alt="testimonial1" />
              <strong>John doe</strong>
              <p>Customer</p>
            </div>
            <div className="customer-text-inner">
              <div className="customer-text">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Customer;
