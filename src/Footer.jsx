import React from "react";
const Footer = () => {
  return (
    <>
      <div class="from-outer">
        <div class="container">
          <div class="title">
            <h2>
              Latest From <i>Etrend</i>
            </h2>
          </div>
          <div class="from-text">
            <p>
              Subscribe to our newsletter to get exclusive discounts and
              <br />
              new theme launches right in your inbox.
            </p>
          </div>
          <div class="from-input">
            <div class="from-input-inner">
              <div class="from-input-item">
                <div class="input">
                  <input type="text" placeholder="Your email address" />
                </div>
                <div class="buttom">
                  <a href="/" class="primary-btn">
                    Send
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="top-inner">
              <div className="top-item">
                <div className="top-title aro">Contact</div>
                <ul className="top-l">
                  <li>
                    <span className="location">Address</span>
                    Etrend
                    <br />
                    123 Street, London
                    <br />
                    United States
                  </li>
                  <li>
                    <span className="mail">Mail us</span>
                    <a href="/" className="info">
                      abhi@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="call"> Phone </span>
                    <a href="tel:12345678" className="info">
                      12977739
                    </a>
                  </li>
                </ul>
              </div>
              <div className="top-item">
                <div className="top-title">Products</div>
                <ul>
                  <li>
                    <a href="/"> Secure payment </a>
                  </li>
                  <li>
                    <a href="/"> Prices drop </a>
                  </li>

                  <li>
                    <a href="/"> New products </a>
                  </li>
                  <li>
                    <a href="/"> Best sales </a>
                  </li>
                  <li>
                    <a href="/"> Stores </a>
                  </li>
                </ul>
              </div>
              <div className="top-item">
                <div className="top-title">Our company</div>
                <ul>
                  <li>
                    <a href="/">Delivery</a>
                  </li>
                  <li>
                    <a href="/"> Legal Notice </a>
                  </li>
                  <li>
                    <a href="/"> About us </a>
                  </li>
                  <li>
                    <a href="/"> Contact us </a>
                  </li>
                </ul>
              </div>

              <div className="top-item">
                <div className="top-title">your Account</div>
                <ul>
                  <li>
                    <a href="/"> Personal info </a>
                  </li>
                  <li>
                    <a href="/"> Orders </a>
                  </li>
                  <li>
                    <a href="/"> Credit slips </a>
                  </li>
                  <li>
                    <a href="/"> Addresses </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        
          {/* <!-- footer top media 767px --> */}
          <div className="footer-middel">
            <div className="middel-inner">
              <div className="logo">
                <img src="assets/image/etrend-logo1.png" alt="logo" />
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <ul>
                <li>
                  <i className="fa-brands fa-facebook-f"></i>
                </li>
                <li>
                  <i className="fa-brands fa-twitter"></i>
                </li>
                <li>
                  <i className="fa-brands fa-pinterest-p"></i>
                </li>
                <li>
                  <i className="fa-brands fa-youtube"></i>
                </li>
                <li>
                  <i className="fa-brands fa-vimeo-v"></i>
                </li>
                <li>
                  <i className="fa-brands fa-instagram"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="bottom-inner">
              <p>
                <a href="/"> © 2024 - Ecommerce software by PrestaShop™ </a>
              </p>
              <ul>
                <li>
                  <i className="fa-brands fa-cc-visa"></i>
                </li>
                <li>
                  <i className="fa-brands fa-cc-paypal"></i>
                </li>
                <li>
                  <i className="fa-brands fa-cc-discover"></i>
                </li>
                <li>
                  <i className="fa-brands fa-cc-amex"></i>
                </li>
                <li>
                  <i className="fa-brands fa-cc-mastercard"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
