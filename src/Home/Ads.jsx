import React from "react";
const Ads = () => {
  return (
    <>
      <div className="ads-outer">
        <div className="container">
          <div className="ads-inner">
            <div className="ads-item">
              <div className="ads-item-inner">
                <img src="assets/image/ad-block-1.jpg" alt="ab-block-1" />
                <div className="ads-text">
                  <p>
                    Only
                    <span>Three</span>
                    <br />
                    <strong>days left</strong>
                    <br />
                    on Fashion <br />
                    Weeks sale!
                  </p>
                  <a className="primary-btn" href="/">
                    shop today
                  </a>
                </div>
              </div>
            </div>
            <div className="ads-item">
              <div className="ads-item-inner">
                <img src="assets/image/ad-block-2.jpg" alt="ad-block-2" />
                <div className="ads-text">
                  <p>
                    Get
                    <span>Winter</span>
                    <br />
                    <strong>lookbook</strong>
                    <br />
                    with online <br />
                    purchase
                  </p>
                  <a className="primary-btn" href="/">
                    get your copy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ads;
