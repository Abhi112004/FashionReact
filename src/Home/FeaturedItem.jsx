import React from "react";
const FeaturedItem = (prop) => {
  return (
    <>
      <div className="featured-item">
        <div className="featured-item-inner">
          <div className="featured-img">
            <img src={prop.img} alt="accusantium-dolore" />
            <div className="hover-img">
              <img src={prop.img2} alt="" />
            </div>
            <div className="featured-text1">
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
          <div className="featured-text">
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
export default FeaturedItem;
