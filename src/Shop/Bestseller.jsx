import React from "react";
const Bestseller = () => {
  return (
    <>
    <div className="shop-featured-outer">
      <div className="title">
        <h2>
        Best<i>Seller </i>
        </h2>
      </div>
      <div className="shop-featured-inner">
        <div className="shop-featured-item">
          <div className="shop-featured-item-inner">
            <div className="shop-featured-img">
              <img
                src="assets/image/accusantium-dolore7.jpg"
                alt="accusantium-dolore"
              />
              <div className="hover-img">
                <img src="assets/image/accusantium-dolore3.jpg" alt="" />
              </div>
              <div className="shop-featured-text1">
                <a href="/">Quick view</a>
              </div>
            </div>
            <div className="new-text">
              <p>new</p>
            </div>

            <div className="shop-featured-text">
              <h3>Women's Regular Top</h3>
              <span>$99.00</span>
              <a className="primary-btn" href="/">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Bestseller;
