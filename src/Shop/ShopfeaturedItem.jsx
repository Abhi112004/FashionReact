import React from "react";
const ShopfeaturedItem = (prop) => {
  return (
    <>
      {" "}
      <div className="shop-featured-item">
        <div className="shop-featured-item-inner">
          <div className="shop-featured-img">
            <img src={prop.img} alt="accusantium-dolore" />
            <div className="hover-img">
              <img src={prop.img2} alt="" />
            </div>
            <div className="shop-featured-text1">
              <a href="/">Quick view</a>
            </div>
          </div>
          <div className="new-text">
            <p>new</p>
          </div>
          <div className="no-sale" style={{ display: `${prop.nosale}` }}>
            <p>on sale!</p>
          </div>
          <div className="sale-text" style={{ display: `${prop.sale}` }}>
            <p>-{prop.salep}%</p>
          </div>
          <div className="shop-featured-text">
            <h3>{prop.text}</h3>
            <span>
              ${prop.pri}
              {""}
              <s style={{ display: `${prop.priS}` }}>${prop.pri1}</s>
            </span>
            <a className="primary-btn" href="/">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopfeaturedItem;
