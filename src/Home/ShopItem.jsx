import React from "react";
const ShopItem=(prop)=>{
    return(
        <>
        <div className="item-row">
              <div className="item-row-inner">
                <div className="shop-img">
                  <img src={prop.img} alt="thumb1" />
                </div>
                <div className="shop-text">{prop.text}</div>
                <div className="shop-hove">
                  <a href="/">
                    <span>View More</span>
                  </a>
                </div>
              </div>
            </div>
        </>
    );
}
export default ShopItem;